import { Field, InputType, Int, ObjectType } from 'type-graphql';
import { Hr_Assignee, HR_Type } from '../../entities/Hr_Assignee';

@ObjectType()
export class FieldError {
  @Field()
  field: string;
  @Field()
  message: string;
}

@ObjectType()
export class Hr_Assignee_Response {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => Hr_Assignee, { nullable: true })
  hr_assignee?: Hr_Assignee;
}

@InputType()
export class Hr_Assignee_Input {
  @Field(() => Int) // for graphql type
  id: number;

  @Field()
  name: string;

  @Field()
  password: string;

  @Field()
  profile_pic_url: string;

  @Field(() => HR_Type)
  hr_type: HR_Type;

  @Field(() => String)
  mail: string;

  @Field(() => String)
  createdAt: Date;

  @Field(() => String)
  updatedAt: Date;
}

@InputType()
export class Hr_Assignee_Update_Input {
  @Field()
  name: string;

  @Field()
  password: string;

  @Field()
  profile_pic_url: string;

  @Field(() => HR_Type)
  hr_type: HR_Type;

  @Field(() => String)
  mail: string;
}
