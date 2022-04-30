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
export class File extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  file_number: number;

  @Field(() => Number, { nullable: true })
  @Column({ type: 'bigint', nullable: true })
  patient_id: number;

  @Field(() => String, { nullable: true })
  @Column({ type: 'text', nullable: true })
  status: string;

  @Field(() => Number, { nullable: true })
  @Column({ type: 'decimal', nullable: true })
  assignee_id: number;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
