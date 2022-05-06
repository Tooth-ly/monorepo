import { Field, InputType, ObjectType } from 'type-graphql';
import { ServiceLog } from '../../entities/ServiceLog';
import { FieldError } from '../../types';

@ObjectType()
export class ServeLog_Response {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => ServiceLog, { nullable: true })
  servicelog?: ServiceLog;
}

@InputType()
export class ServiceLog_Input {
  @Field(() => Number)
  service_id: number;

  @Field(() => Number)
  patient_id: number;

  @Field(() => Number)
  filenumber: number;

  @Field(() => Number)
  assignee_id: number;

  @Field(() => String)
  date: Date;
}

@InputType()
export class ServiceLog_Update_Input {
  @Field(() => Number, { nullable: true })
  service_id?: number;

  @Field(() => Number, { nullable: true })
  patient_id?: number;

  @Field(() => Number, { nullable: true })
  filenumber?: number;

  @Field(() => Number, { nullable: true })
  assignee_id?: number;

  @Field(() => String, { nullable: true })
  date?: Date;
}
