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

  @Field(() => Number, { nullable: true })
  @Column({ type: 'int', nullable: true })
  file_number?: number;

  @Field(() => String)
  @Column({ type: 'text' })
  name: string;

  @Field(() => String, { nullable: true })
  @Column({ type: 'text', nullable: true })
  profile_pic_url?: string;

  @Field(() => Gender)
  @Column({ type: 'text' })
  gender: Gender;

  @Field(() => Number, { nullable: true })
  @Column({ type: 'int', nullable: true })
  age?: number;

  @Field(() => Number, { nullable: true })
  @Column({ type: 'int', nullable: true })
  cat_id: number;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
