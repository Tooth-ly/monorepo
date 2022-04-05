import { Field, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum Gender {
  female = 'female',
  male = 'male',
  other = 'other',
}

@ObjectType()
@Entity()
export class Patient extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Number)
  @Column({ type: 'int' })
  file_number: number;

  @Field(() => String)
  @Column({ type: 'text' })
  name: string;

  @Field(() => Gender)
  @Column({ type: 'text' })
  gender: Gender;

  @Field(() => Number)
  @Column({ type: 'int' })
  age: number;

  @Field(() => Number)
  @Column({ type: 'int' })
  cat_id: number;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
