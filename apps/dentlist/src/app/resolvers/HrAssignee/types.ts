import { Field, InputType, ObjectType } from 'type-graphql';
import { HrAssignee, HR_Type } from '../../entities/HrAssignee';

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

  @Field(() => HrAssignee, { nullable: true })
  hr_assignee?: HrAssignee;
}

@InputType()
export class Hr_Assignee_Input {
  @Field()
  name: string;

  @Field()
  password: string;

  @Field(() => String)
  email: string;

  @Field({ nullable: true })
  phone_number?: string;

  @Field({ nullable: true })
  home_number?: string;

  @Field({ nullable: true })
  home_address?: string;

  @Field({ nullable: true })
  SSN?: string;

  @Field({ nullable: true })
  martial_status?: string;

  @Field({ nullable: true })
  nationality?: string;

  @Field({ nullable: true })
  profile_pic_url?: string;

  @Field(() => HR_Type, { nullable: true })
  hr_type?: HR_Type;
}

@InputType()
export class Hr_Assignee_Update_Input {
  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  phone_number?: string;

  @Field({ nullable: true })
  home_number?: string;

  @Field({ nullable: true })
  home_address?: string;

  @Field({ nullable: true })
  SSN?: string;

  @Field({ nullable: true })
  martial_status?: string;

  @Field({ nullable: true })
  nationality?: string;

  @Field({ nullable: true })
  profile_pic_url?: string;

  @Field(() => HR_Type, { nullable: true })
  hr_type?: HR_Type;
}
