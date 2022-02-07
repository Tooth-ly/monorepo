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
  id: number;

  @Field()
  @Column({ type: 'decimal', nullable: true })
  patient_id: number;

  @Field()
  @Column({ type: 'decimal', nullable: true })
  file_number: number;

  @Field()
  @Column()
  photo_url: string;

  @Field()
  @Column({ type: 'decimal', nullable: true })
  assignee_id: number;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
