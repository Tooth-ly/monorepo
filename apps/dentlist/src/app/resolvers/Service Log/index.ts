import { Arg, Int, Mutation, Query, Resolver } from 'type-graphql';
import {
  ServeLog_Response,
  ServiceLog_Input,
  ServiceLog_Update_Input,
} from './types';
import { ServiceLog } from '../../entities/ServiceLog';
import { AppDataSource } from '../../data-source';

@Resolver()
export class ServiceLogResolver {
  @Mutation(() => ServiceLog)
  async addService(
    @Arg('input', () => ServiceLog_Input) input: ServiceLog_Input
  ): Promise<ServeLog_Response> {
    const servicelog = await AppDataSource.getRepository(ServiceLog)
      .create(input)
      .save();

    return {
      servicelog,
    };
  }

  @Query(() => [ServiceLog])
  servicelogs() {
    return AppDataSource.getRepository(ServiceLog).find();
  }

  @Query(() => ServiceLog)
  servicelog(@Arg('service_log_id') service_log_id: number) {
    return AppDataSource.manager.findOneBy(ServiceLog, { id: service_log_id });
  }

  @Query(() => [ServiceLog])
  servicelogsByFilenumber(@Arg('filenumber') filenumber: number) {
    return AppDataSource.manager.findOneBy(ServiceLog, { filenumber });
  }

  // crud: update service log
  @Mutation(() => Boolean)
  async updateServiceLog(
    @Arg('id', () => Int) id: number,
    @Arg('input', () => ServiceLog_Input)
    input: ServiceLog_Update_Input
  ) {
    await AppDataSource.getRepository(ServiceLog).update({ id }, input);
    return true;
  }

  // crud: delete
  @Mutation(() => Boolean)
  async deleteServiceLog(@Arg('id', () => Int) id: number) {
    await AppDataSource.getRepository(ServiceLog).delete({ id });
    return true;
  }
}
