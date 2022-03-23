import { Arg, Int, Mutation, Query, Resolver } from 'type-graphql';
import {
  ServeLog_Response,
  ServiceLog_Input,
  ServiceLog_Update_Input,
} from './types';
import { ServiceLog } from '../../entities/ServiceLog';

@Resolver()
export class ServiceLogResolver {
  @Mutation(() => ServiceLog)
  async addService(
    @Arg('input', () => ServiceLog_Input) input: ServiceLog_Input
  ): Promise<ServeLog_Response> {
    const servicelog = await ServiceLog.create(input).save();

    return {
      servicelog: servicelog,
    };
  }

  @Query(() => [ServiceLog])
  servicelogs() {
    return ServiceLog.find();
  }

  @Query(() => ServiceLog)
  servicelog(@Arg('service_log_id') service_log_id: number) {
    return ServiceLog.findOne(service_log_id);
  }

  // crud: update service log
  @Mutation(() => Boolean)
  async updateServiceLog(
    @Arg('id', () => Int) id: number,
    @Arg('input', () => ServiceLog_Input)
    input: ServiceLog_Update_Input
  ) {
    await ServiceLog.update({ id }, input); // search by id and update but input
    return true;
  }

  // crud: delete
  @Mutation(() => Boolean)
  async deleteServiceLog(@Arg('id', () => Int) id: number) {
    await ServiceLog.delete({ id });
    return true;
  }
}
