import { Patient } from 'src/app/entities/Patient';
import { ObjectType, Field, InputType } from 'type-graphql';

@ObjectType()
export class FieldError {
  @Field()
  field: string;
  @Field()
  message: string;
}

@ObjectType()
export class Patient_Response {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => Patient, { nullable: true })
  patient?: Patient;
}

@InputType()
export class Patient_Input {
  @Field()
  id: number;

  @Field(() => String)
  medical_condition: string;

  @Field(() => String)
  createdAt: Date;

  @Field(() => String)
  updatedAt: Date;
}

@InputType()
export class Patient_Update_Input {
  @Field()
  id?: number;

  @Field(() => String)
  medical_condition?: string;
}
