import {
  Arg,
  Field,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from 'type-graphql';
import { Hello } from '../entities/Hello';

@ObjectType()
class FieldError {
  @Field()
  field: string;
  @Field()
  message: string;
}

@ObjectType()
class HelloResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => Hello, { nullable: true })
  hello?: Hello;
}

@Resolver(Hello)
export class HelloResolver {
  @Query(() => Hello)
  me(@Arg('id') id: number) {
    return Hello.find({ id });
  }

  @Mutation(() => HelloResponse)
  async create(@Arg('length') length: number): Promise<HelloResponse> {
    const hello = await Hello.create({ length }).save();
    return {
      errors: [],
      hello,
    };
  }
}
