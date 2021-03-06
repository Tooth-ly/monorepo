import { Field, Int, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum HR_Type {
  Admin = 'Admin',
  Doctor = 'Doctor',
  Student = 'Student',
  Employee = 'Employee',
}

@ObjectType() // for graphql class
@Entity()
export class HrAssignee extends BaseEntity {
  @Field(() => Int) // for graphql type
  @PrimaryGeneratedColumn() // for db type
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  password: string;

  @Field(() => String)
  @Column()
  email: string;

  @Field({ nullable: true })
  @Column({ type: 'text', nullable: true })
  phone_number?: string;

  @Field({ nullable: true })
  @Column({ type: 'text', nullable: true })
  home_number?: string;

  @Field({ nullable: true })
  @Column({ type: 'text', nullable: true })
  home_address?: string;

  @Field({ nullable: true })
  @Column({ type: 'text', nullable: true })
  SSN?: string;

  @Field({ nullable: true })
  @Column({ type: 'text', nullable: true })
  martial_status?: string;

  @Field({ nullable: true })
  @Column({ type: 'text', nullable: true })
  nationality?: string;

  @Field({ nullable: true })
  @Column({ type: 'text', nullable: true })
  profile_pic_url?: string;

  @Field(() => HR_Type, { nullable: true })
  @Column({ type: 'text', nullable: true })
  hr_type?: HR_Type;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
