import { Patient } from '../../entities/Patient';
import { Arg, Int, Mutation, Query, Resolver } from 'type-graphql';
import { Patient_Input, Patient_Response, Patient_Update_Input } from './types';

@Resolver()
export class Patient_Resolver {
  // crud: create
  @Mutation(() => Patient)
  async createPatient(
    @Arg('input', () => Patient_Input) input: Patient_Input
  ): Promise<Patient_Response> {
    const patient = await Patient.create(input).save();

    return {
      patient,
    };
  }

  // crud: read
  @Query(() => [Patient])
  patients() {
    return Patient.find();
  }

  @Query(() => Patient)
  patient(@Arg('id') id: number) {
    return Patient.findOne(id);
  }

  // crud: update
  @Mutation(() => Boolean)
  async updatePatient(
    @Arg('id', () => Int) id: number,
    @Arg('input', () => Patient_Input)
    input: Patient_Update_Input
  ) {
    await Patient.update({ id }, input); // search by id and update but input
    return true;
  }

  // crud: delete
  @Mutation(() => Boolean)
  async deletePatient(@Arg('id', () => Int) id: number) {
    await Patient.delete({ id });
    return true;
  }
}
