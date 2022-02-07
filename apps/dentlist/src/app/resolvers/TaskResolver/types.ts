import { Task } from '../..//entities/Task';
import { ObjectType, Field, InputType } from 'type-graphql';

@ObjectType()
export class FieldError {
  @Field()
  field: string;
  @Field()
  message: string;
}

@ObjectType()
export class Task_Response {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => Task, { nullable: true })
  task?: Task;
}

@InputType()
export class Task_Input {
  @Field()
  id: number;

  @Field(() => Number)
  sid: number;

  @Field(() => Number)
  required_level: number;

  @Field(() => String)
  description: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  createdAt: Date;

  @Field(() => String)
  updatedAt: Date;
}

@InputType()
export class Task_Update_Input {
  @Field(() => Number)
  sid?: number;

  @Field(() => Number)
  required_level?: number;

  @Field(() => String)
  description?: string;

  @Field(() => String)
  title?: string;
}
