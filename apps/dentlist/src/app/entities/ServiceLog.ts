import { Field, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum ServiceType {
  New = 'New',
  In_Progress = 'In Progress',
  Done = 'Done',
}
@ObjectType()
@Entity()
export class ServiceLog extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => ServiceType, { nullable: true })
  @Column({ type: 'text', nullable: true })
  type?: ServiceType;

  @Field(() => Number)
  @Column({ type: 'int' })
  service_id: number;

  @Field(() => Number)
  @Column({ type: 'int' })
  patient_id: number;

  @Field(() => Number)
  @Column({ type: 'int' })
  filenumber: number;

  @Field(() => Number)
  @Column({ type: 'int' })
  assignee_id: number;

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
