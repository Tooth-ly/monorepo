import { FieldError } from '../../types';
import { Field, InputType, ObjectType } from 'type-graphql';
import { ServiceLog, ServiceType } from '../../entities/ServiceLog';

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
  assignee_id: number;

  @Field(() => ServiceType, { nullable: true })
  type?: ServiceType;
}

@InputType()
export class ServiceLog_Update_Input {
  @Field(() => Number, { nullable: true })
  service_id?: number;

  @Field(() => Number, { nullable: true })
  patient_id?: number;

  @Field(() => Number, { nullable: true })
  assignee_id?: number;

  @Field(() => ServiceType, { nullable: true })
  type?: ServiceType;
}
