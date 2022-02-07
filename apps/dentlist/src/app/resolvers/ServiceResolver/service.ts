import { Service } from 'src/app/entities/Service';
import { Arg, Int, Mutation, Query, Resolver } from 'type-graphql';
import { Service_Input, Service_Response, Service_Update_Input } from './types';

@Resolver()
export class Service_Resolver {
  // crud: create
  @Mutation(() => Service)
  async createService(
    @Arg('input', () => Service_Input) input: Service_Input
  ): Promise<Service_Response> {
    const service = await Service.create(input).save();

    return {
      service,
    };
  }

  // crud: read
  @Query(() => [Service])
  services() {
    return Service.find();
  }

  @Query(() => Service)
  service(@Arg('id') id: string) {
    return Service.findOne(id);
  }

  // crud: update
  @Mutation(() => Boolean)
  async updateService(
    @Arg('id', () => Int) id: number,
    @Arg('input', () => Service_Input)
    input: Service_Update_Input
  ) {
    await Service.update({ id }, input); // search by id and update but input
    return true;
  }

  // crud: delete
  @Mutation(() => Boolean)
  async deleteService(@Arg('id', () => Int) id: number) {
    await Service.delete({ id });
    return true;
  }

  // Services by file
  @Query(() => [Service])
  ServicesByFile(@Arg('fid', () => Int) fid: number) {
    return Service.find({ file_number: fid });
  }
}
