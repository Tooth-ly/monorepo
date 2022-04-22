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

  @Field({ nullable: true })
  profile_pic_url?: string;

  @Field({ nullable: true })
  hr_type?: HR_Type;

  @Field(() => String)
  mail: string;
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
