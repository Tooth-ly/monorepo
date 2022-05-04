import { Arg, Int, Mutation, Query, Resolver } from 'type-graphql';
import { AppDataSource } from '../../data-source';
import { File } from '../../entities/File';
import {
  Files_Response,
  File_Input,
  File_Response,
  File_Update_Input,
} from './types';

@Resolver()
export class File_Resolver {
  // crud: create
  @Mutation(() => File_Response)
  async createFile(
    @Arg('input', () => File_Input) input: File_Input
  ): Promise<File_Response> {
    const file = await AppDataSource.getRepository(File).create(input).save();

    return {
      file,
    };
  }

  // crud: read
  @Query(() => Files_Response)
  files() {
    return {
      files: AppDataSource.getRepository(File).find(),
    };
  }

  @Query(() => File_Response)
  file(@Arg('file_number') file_number: number) {
    return {
      file: AppDataSource.manager.findOneBy(File, { file_number }),
    };
  }

  // crud: update
  @Mutation(() => Boolean)
  async updateFile(
    @Arg('file_number', () => Int) file_number: number,
    @Arg('input', () => File_Input)
    input: File_Update_Input
  ) {
    await AppDataSource.getRepository(File).update({ file_number }, input); // search by id and update but input
    return true;
  }

  // crud: delete
  @Mutation(() => Boolean)
  async deleteFile(@Arg('file_number', () => Int) file_number: number) {
    await AppDataSource.getRepository(File).delete({ file_number });
    return true;
  }
}
