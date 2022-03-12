import { Task } from '../../entities/Task';
import { Arg, Int, Mutation, Query, Resolver } from 'type-graphql';
import { Task_Input, Task_Response, Task_Update_Input } from './types';
import { validateTask } from './validation';
import { getConnection } from 'typeorm';

@Resolver()
export class Task_Resolver {
  // crud: create
  @Mutation(() => Task)
  async createTask(
    @Arg('input', () => Task_Input) input: Task_Input
  ): Promise<Task_Response> {
    const errors = validateTask(input);
    if (errors) {
      return { errors };
    }

    const task = await Task.create(input).save();

    return {
      task,
    };
  }

  // crud: read
  @Query(() => [Task])
  tasks() {
    return Task.find();
  }

  @Query(() => Task)
  task(@Arg('id') id: string) {
    return Task.findOne(id);
  }

  // crud: update
  @Mutation(() => Boolean)
  async updateTask(
    @Arg('id', () => Int) id: number,
    @Arg('input', () => Task_Input)
    input: Task_Update_Input
  ) {
    await Task.update({ id }, input); // search by id and update but input
    return true;
  }

  // crud: delete
  @Mutation(() => Boolean)
  async deleteTask(@Arg('id', () => Int) id: number) {
    await Task.delete({ id });
    return true;
  }

  // tasks by service id
  @Query(() => [Task])
  async tasksByService(@Arg('sid', () => Int) sid: number) {
    const tasks = await getConnection()
    .createQueryBuilder()
    .select("task")
    .from(Task, "task")
    .where("task.sid = :sid", { sid })
    .getMany()
    console.log('tasks by service:', tasks)
    return tasks
  }
}
