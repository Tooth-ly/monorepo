import { ObjectType, Field, InputType } from 'type-graphql';
import { Person } from '../../entities/Person';

@ObjectType()
export class FieldError {
  @Field()
  field: string;
  @Field()
  message: string;
}

@ObjectType()
export class Person_Response {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => Person, { nullable: true })
  person?: Person;
}

@InputType()
export class Person_Input {
  @Field({ nullable: true })
  age: number;

  @Field(() => Number)
  patient_number: number;

  @Field({ nullable: true })
  gender: string;

  @Field(() => String, { nullable: true })
  phone_number: string;

  @Field(() => String, { nullable: true })
  birthdate: Date;
}

@InputType()
export class Person_Update_Input {
  @Field({ nullable: true })
  age?: number;

  @Field({ nullable: true })
  gender?: string;

  @Field(() => String, { nullable: true })
  phone_number?: string;

  @Field(() => String, { nullable: true })
  birthdate?: Date;
}
