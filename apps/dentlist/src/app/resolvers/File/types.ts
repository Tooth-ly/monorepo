import { ObjectType, Field, InputType } from 'type-graphql';
import { File } from '../../entities/File';

@ObjectType()
export class FieldError {
  @Field()
  field: string;
  @Field()
  message: string;
}

@ObjectType()
export class File_Response {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => File, { nullable: true })
  file?: File;
}

@InputType()
export class File_Input {
  @Field(() => Number)
  file_number: number;

  @Field(() => String, { nullable: true })
  status: string;

  @Field(() => Number)
  patient_id: number;

  @Field(() => Number)
  service_log_id: number;

  @Field(() => String, { nullable: true })
  photo_url: string;

  @Field(() => Number, { nullable: true })
  assignee_id: number;
}

@InputType()
export class File_Update_Input {
  @Field({ nullable: true })
  patient_id?: number;

  @Field({ nullable: true })
  service_log_id?: number;

  @Field(() => String, { nullable: true })
  status: string;

  @Field({ nullable: true })
  photo_url?: string;

  @Field({ nullable: true })
  assignee_id?: number;
}
