import { FieldError } from '../../types';
import { Field, InputType, ObjectType } from 'type-graphql';
import { Stage, Task } from '../..//entities/Task';

@ObjectType()
export class Task_Response {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => Task, { nullable: true })
  task?: Task;
}

@InputType()
export class Task_Input {
  @Field(() => Number)
  service_log_id: number;

  @Field(() => Stage)
  stage: Stage;

  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  assignee_notes: string;

  @Field(() => String)
  date: Date;
}

@InputType()
export class Task_Update_Input {
  @Field(() => Number, { nullable: true })
  service_log_id?: number;

  @Field(() => Stage, { nullable: true })
  stage?: Stage;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  assignee_notes?: string;

  @Field(() => String, { nullable: true })
  date?: Date;
}
