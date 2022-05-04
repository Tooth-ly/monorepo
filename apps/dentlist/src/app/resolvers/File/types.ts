import { FieldError } from '../../types';
import { ObjectType, Field, InputType } from 'type-graphql';
import { File } from '../../entities/File';

@ObjectType()
export class File_Response {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => File, { nullable: true })
  file?: File;
}
@ObjectType()
export class Files_Response {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => [File], { nullable: true })
  files?: [File];
}

@InputType()
export class File_Input {
  @Field(() => Number, { nullable: true })
  patient_id: number;

  @Field(() => String, { nullable: true })
  status: string;

  @Field(() => Number, { nullable: true })
  assignee_id: number;
}

@InputType()
export class File_Update_Input {
  @Field({ nullable: true })
  patient_id?: number;

  @Field(() => String, { nullable: true })
  status: string;

  @Field({ nullable: true })
  assignee_id?: number;
}
