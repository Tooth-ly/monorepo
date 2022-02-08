import { Person } from '../../entities/Person';
import { Arg, Int, Mutation, Query, Resolver } from 'type-graphql';
import { Person_Input, Person_Response, Person_Update_Input } from './types';

@Resolver()
export class Person_Resolver {
  // crud: create
  @Mutation(() => Person)
  async createPerson(
    @Arg('input', () => Person_Input) input: Person_Input
  ): Promise<Person_Response> {
    const person = await Person.create(input).save();

    return {
      person,
    };
  }

  // crud: read
  @Query(() => [Person])
  persons() {
    return Person.find();
  }

  @Query(() => Person)
  person(@Arg('id') id: string) {
    return Person.findOne(id);
  }

  // crud: update
  @Mutation(() => Boolean)
  async updatePerson(
    @Arg('patient_number', () => Int) patient_number: number,
    @Arg('input', () => Person_Input)
    input: Person_Update_Input
  ) {
    await Person.update({ patient_number }, input); // search by id and update but input
    return true;
  }

  // crud: delete
  @Mutation(() => Boolean)
  async deletePerson(@Arg('patient_number', () => Int) patient_number: number) {
    await Person.delete({ patient_number });
    return true;
  }
}
