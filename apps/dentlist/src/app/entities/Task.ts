import { Field, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum Stage {
  New = 'New',
  Pending = 'Pending',
  Done = 'Done',
}

@ObjectType()
@Entity()
export class Task extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Number)
  @Column({ type: 'int' })
  service_log_id: number;

  @Field(() => Stage)
  @Column({ type: 'text' })
  stage: Stage;

  @Field(() => String)
  @Column({ type: 'text' })
  name: string;

  @Field(() => String, { nullable: true })
  @Column({ type: 'text', nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  @Column({ type: 'text', nullable: true })
  assignee_notes: string;

  @Field(() => String)
  @CreateDateColumn()
  date: Date;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
