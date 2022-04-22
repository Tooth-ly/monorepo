import { Arg, Int, Mutation, Query, Resolver } from 'type-graphql';
import { File_Input, File_Response, File_Update_Input } from './types';
import { File } from '../../entities/File';
import { AppDataSource } from '../../data-source';

@Resolver()
export class File_Resolver {
  // crud: create
  @Mutation(() => File)
  async createFile(
    @Arg('input', () => File_Input) input: File_Input
  ): Promise<File_Response> {
    const file = await AppDataSource.getRepository(File).create(input).save();

    return {
      file,
    };
  }

  // crud: read
  @Query(() => [File])
  files() {
    return AppDataSource.getRepository(File).find();
  }

  @Query(() => File)
  file(@Arg('file_number') file_number: number) {
    return AppDataSource.manager.findBy(File, { file_number });
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
