import { Request, Response } from 'express';
import { Session, SessionData } from 'express-session';
import { Redis } from 'ioredis';
import { Field, ObjectType } from 'type-graphql';

export type MyContext = {
  req: Request & {
    session: Session & Partial<SessionData> & { hr_assignee_Id?: number };
  };
  redis: Redis;
  res: Response;
};

export enum condition {
  New,
  Used,
}

@ObjectType()
export class FieldError {
  @Field()
  field: string;
  @Field()
  message: string;
}
