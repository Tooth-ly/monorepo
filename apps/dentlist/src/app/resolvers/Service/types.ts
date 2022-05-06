import { Field, InputType, ObjectType } from 'type-graphql';
import { Service } from '../../entities/Service';
import { FieldError } from '../../types';

@ObjectType()
export class Service_Response {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => Service, { nullable: true })
  service?: Service;
}

@InputType()
export class Service_Input {
  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  description?: string;
}

@InputType()
export class Service_Update_Input {
  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  description?: string;
}
