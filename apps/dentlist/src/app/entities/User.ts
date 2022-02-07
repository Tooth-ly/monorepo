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
export class User extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ nullable: true })
  @Column({ type: 'decimal', nullable: true })
  length: number;

  @Field({ nullable: true })
  @Column({ type: 'int', nullable: true })
  age: number;

  @Field({ nullable: true })
  @Column({ type: 'text', nullable: true })
  gender: string;

  @Field(() => String, { nullable: true })
  @Column({ type: 'text', nullable: true })
  phone_number: string;

  @Field(() => String, { nullable: true })
  @Column({
    type: 'date',
    nullable: true,
  })
  birthdate: Date;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
