import { AppDataSource } from '../../data-source';
import { Arg, Int, Mutation, Query, Resolver } from 'type-graphql';
import { Task } from '../../entities/Task';
import { Task_Input, Task_Response, Task_Update_Input } from './types';
import { validateTask } from './validation';

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

    const task = await AppDataSource.getRepository(Task).create(input).save();

    return {
      task,
    };
  }

  // crud: read
  @Query(() => [Task])
  tasks() {
    return AppDataSource.getRepository(Task).find();
  }

  @Query(() => Task)
  task(@Arg('id') id: number) {
    return AppDataSource.manager.findBy(Task, { id });
  }

  // crud: update
  @Mutation(() => Boolean)
  async updateTask(
    @Arg('id', () => Int) id: number,
    @Arg('input', () => Task_Input)
    input: Task_Update_Input
  ) {
    await AppDataSource.getRepository(Task).update({ id }, input);
    return true;
  }

  // crud: delete
  @Mutation(() => Boolean)
  async deleteTask(@Arg('id', () => Int) id: number) {
    await AppDataSource.getRepository(Task).delete({ id });
    return true;
  }

  // tasks by service id
  @Query(() => [Task])
  async tasksByService(@Arg('sid', () => Int) sid: number) {
    const tasks = await AppDataSource.createQueryBuilder()
      .select('task')
      .from(Task, 'task')
      .where('task.sid = :sid', { sid })
      .getMany();
    console.log('tasks by service:', tasks);
    return tasks;
  }
}
