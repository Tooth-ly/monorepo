import argon2 from 'argon2';
import { COOKIE_NAME, FORGET_PASSWORD_PREFIX } from '../../constants';
import { MyContext } from '../../types';
import {
  Arg,
  Ctx,
  FieldResolver,
  Int,
  Mutation,
  Query,
  Resolver,
  Root,
} from 'type-graphql';
import { HrAssignee } from '../../entities/HrAssignee';
import {
  Hr_Assignee_Input,
  Hr_Assignee_Response,
  Hr_Assignee_Update_Input,
} from './types';
import { validateHrAssignee } from './validation';
import { AppDataSource } from '../../data-source';

@Resolver(HrAssignee)
export class Hr_Assignee_Resolver {
  // for authentication purposes
  @Query(() => HrAssignee, { nullable: true })
  me(@Ctx() { req }: MyContext) {
    // you are not logged in
    if (!req.session.hr_assignee_Id) {
      return null;
    }

    return AppDataSource.manager.findBy(HrAssignee, {
      id: req.session.hr_assignee_Id,
    });
  }

  // crud: create
  @Mutation(() => Hr_Assignee_Response)
  async createHrAssignee(
    @Arg('input', () => Hr_Assignee_Input) input: Hr_Assignee_Input,
    @Ctx() { req }: MyContext
  ): Promise<Hr_Assignee_Response> {
    const errors = validateHrAssignee(input);
    if (errors) {
      console.log(errors);
      console.log(input);
      return { errors };
    }

    const hashedPassword = await argon2.hash(input.password); // .verify unenc
    input.password = hashedPassword;

    const hr_assignee = await AppDataSource.getRepository(HrAssignee)
      .create(input)
      .save(); // insert and select

    // store user id session
    // this will set a cookie on the user
    // keep them logged in
    req.session.hr_assignee_Id = hr_assignee.id;

    return {
      hr_assignee,
    };
  }

  // crud: read
  @Query(() => [HrAssignee])
  hrAssignees() {
    return AppDataSource.getRepository(HrAssignee).find();
  }

  @Query(() => HrAssignee)
  hrAssignee(@Arg('id') id: number, @Ctx() { req }: MyContext) {
    if (!req.session.hr_assignee_Id) {
      return null;
    }
    return AppDataSource.manager.findBy(HrAssignee, { id });
  }

  // crud: update
  @Mutation(() => Boolean)
  async updateHrAssignee(
    @Arg('id', () => Int) id: number,
    @Arg('input', () => Hr_Assignee_Update_Input)
    input: Hr_Assignee_Update_Input
  ) {
    await AppDataSource.getRepository(HrAssignee).update({ id }, input); // search by id and update but input
    return true;
  }

  // crud: delete
  @Mutation(() => Boolean)
  async deleteHrAssignee(@Arg('id', () => Int) id: number) {
    await AppDataSource.getRepository(HrAssignee).delete({ id });
    return true;
  }

  @FieldResolver(() => String)
  email(@Root() hr_assignee: HrAssignee, @Ctx() { req }: MyContext) {
    // this is the current user and its ok to show them their own email
    if (req.session.hr_assignee_Id === hr_assignee.id) {
      return hr_assignee.mail;
    }
    // current user wants to see someone elses email
    return '';
  }

  @Mutation(() => Hr_Assignee_Response)
  async changePassword(
    @Arg('token') token: string,
    @Arg('newPassword') newPassword: string,
    @Ctx() { redis, req }: MyContext
  ): Promise<Hr_Assignee_Response> {
    if (newPassword.length <= 2) {
      return {
        errors: [
          {
            field: 'newPassword',
            message: 'length must be greater than 2',
          },
        ],
      };
    }

    const key = FORGET_PASSWORD_PREFIX + token;
    const hr_assignee_id = await redis.get(key);
    if (!hr_assignee_id) {
      return {
        errors: [
          {
            field: 'token',
            message: 'token expired',
          },
        ],
      };
    }

    const hr_assignee_id_num = parseInt(hr_assignee_id);
    const hr_assignees = await AppDataSource.manager.findBy(HrAssignee, {
      id: hr_assignee_id_num,
    });
    const hr_assignee = hr_assignees[0];

    if (!hr_assignee) {
      return {
        errors: [
          {
            field: 'token',
            message: 'user no longer exists',
          },
        ],
      };
    }

    await AppDataSource.getRepository(HrAssignee).update(
      {
        id: hr_assignee_id_num,
      },
      {
        password: await argon2.hash(newPassword),
      }
    );

    await redis.del(key);

    // log in user after change password
    req.session.hr_assignee_Id = hr_assignee.id;

    return { hr_assignee };
  }

  @Mutation(() => Hr_Assignee_Response)
  async login(
    @Arg('email') email: string,
    @Arg('password') password: string,
    @Ctx() { req }: MyContext
  ): Promise<Hr_Assignee_Response> {
    const hr_assignees = await AppDataSource.manager.findBy(HrAssignee, {
      mail: email,
    });
    const hr_assignee = hr_assignees[0];

    if (!hr_assignee) {
      return {
        errors: [
          {
            field: 'Email',
            message: "Email doesn't exist",
          },
        ],
      };
    }
    const valid = await argon2.verify(hr_assignee.password, password);
    if (!valid) {
      return {
        errors: [
          {
            field: 'password',
            message: 'incorrect password',
          },
        ],
      };
    }

    req.session.hr_assignee_Id = hr_assignee.id;
    console.log('req user id', req.session.hr_assignee_Id);

    return {
      hr_assignee,
    };
  }

  @Mutation(() => Boolean)
  logout(@Ctx() { req, res }: MyContext) {
    return new Promise((resolve) =>
      req.session.destroy((err) => {
        res.clearCookie(COOKIE_NAME);
        if (err) {
          console.log(err);
          resolve(false);
          return;
        }

        resolve(true);
      })
    );
  }
}
