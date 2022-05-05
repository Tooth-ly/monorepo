import { Service } from '../../entities/Service';
import { Arg, Int, Mutation, Query, Resolver } from 'type-graphql';
import { AppDataSource } from '../../data-source';
import { Service_Input, Service_Response, Service_Update_Input } from './types';

@Resolver()
export class ServiceResolver {
  @Mutation(() => Service)
  async createService(
    @Arg('input', () => Service_Input) input: Service_Input
  ): Promise<Service_Response> {
    const service = await AppDataSource.getRepository(Service)
      .create(input)
      .save();

    return {
      service,
    };
  }

  @Query(() => [Service])
  services() {
    return AppDataSource.getRepository(Service).find();
  }

  @Query(() => Service)
  service(@Arg('service_id') service_id: number) {
    return AppDataSource.manager.findOneBy(Service, { id: service_id });
  }

  // crud: update service log
  @Mutation(() => Boolean)
  async updateService(
    @Arg('id', () => Int) id: number,
    @Arg('input', () => Service_Update_Input)
    input: Service_Update_Input
  ) {
    await AppDataSource.getRepository(Service).update({ id }, input);
    return true;
  }

  // crud: delete
  @Mutation(() => Boolean)
  async deleteService(@Arg('id', () => Int) id: number) {
    await AppDataSource.getRepository(Service).delete({ id });
    return true;
  }
}
