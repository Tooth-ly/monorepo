import { Service } from '../..//entities/Service';
import { ObjectType, Field, InputType } from 'type-graphql';

@ObjectType()
export class FieldError {
  @Field()
  field: string;
  @Field()
  message: string;
}

@ObjectType()
export class Service_Response {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => Service, { nullable: true })
  service?: Service;
}

@InputType()
export class Service_Input {
  @Field()
  id: number;

  @Field()
  file_number: number;

  @Field(() => String)
  createdAt: Date;

  @Field(() => String)
  updatedAt: Date;
}

@InputType()
export class Service_Update_Input {
  @Field({ nullable: true })
  id?: number;

  @Field({ nullable: true })
  file_number?: number;
}
