import { Field, InputType, ObjectType } from 'type-graphql';
import { Gender, Patient } from '../../entities/Patient';

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
  @Field(() => Number, { nullable: true })
  file_number?: number;

  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  profile_pic_url?: string;

  @Field(() => Gender)
  gender: Gender;

  @Field(() => Date, { nullable: true })
  dateOfBirth?: Date;

  @Field(() => Number, { nullable: true })
  cat_id?: number;
}

@InputType()
export class Patient_Update_Input {
  @Field(() => Number, { nullable: true })
  file_number?: number;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => Gender, { nullable: true })
  gender?: Gender;

  @Field(() => String, { nullable: true })
  profile_pic_url?: string;

  @Field(() => Date, { nullable: true })
  dateOfBirth?: Date;

  @Field(() => Number, { nullable: true })
  cat_id?: number;
}
