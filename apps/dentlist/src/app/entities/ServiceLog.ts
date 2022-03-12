import { Field, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class ServiceLog extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Number)
  @Column({type: 'number'})
  service_id: number 

  @Field(() => Number)
  @Column({type: 'number'})
  patient_id: number 

  @Field(() => Number)
  @Column({type: 'number'})
  assignee_id: number 

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

