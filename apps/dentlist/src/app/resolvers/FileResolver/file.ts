import { Arg, Int, Mutation, Query, Resolver } from 'type-graphql';
import { File_Input, File_Response, File_Update_Input } from './types';
import { File } from '../../entities/File';

@Resolver()
export class File_Resolver {
  // crud: create
  @Mutation(() => File)
  async createFile(
    @Arg('input', () => File_Input) input: File_Input
  ): Promise<File_Response> {
    const file = await File.create(input).save();

    return {
      file,
    };
  }

  // crud: read
  @Query(() => [File])
  files() {
    return File.find();
  }

  @Query(() => File)
  file(@Arg('id') id: string) {
    return File.findOne(id);
  }

  // crud: update
  @Mutation(() => Boolean)
  async updateFile(
    @Arg('id', () => Int) id: number,
    @Arg('input', () => File_Input)
    input: File_Update_Input
  ) {
    await File.update({ id }, input); // search by id and update but input
    return true;
  }

  // crud: delete
  @Mutation(() => Boolean)
  async deleteFile(@Arg('id', () => Int) id: number) {
    await File.delete({ id });
    return true;
  }
}
