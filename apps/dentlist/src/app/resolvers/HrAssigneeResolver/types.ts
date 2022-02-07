import { Hr_Assignee } from '../..//entities/Hr_Assignee';
import { ObjectType, Field, InputType, Int } from 'type-graphql';

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

  @Field(() => String)
  birth_date: Date;

  @Field(() => Int)
  requirement_level: number;

  @Field(() => String)
  type: string;

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
  name?: string;

  @Field()
  password?: string;

  @Field(() => String)
  birth_date?: Date;

  @Field(() => Int)
  requirement_level?: number;

  @Field(() => String)
  type?: string;

  @Field(() => String)
  mail?: string;
}
