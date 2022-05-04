/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ApolloServer } from 'apollo-server-express';
import connectRedis from 'connect-redis';
import cors from 'cors';
import 'dotenv-safe/config';
import express from 'express';
import session from 'express-session';
import Redis from 'ioredis';
import 'reflect-metadata';
import { buildSchema, registerEnumType } from 'type-graphql';
import { COOKIE_NAME, __prod__ } from './constants';
import { HR_Type } from './entities/HrAssignee';
import { Gender } from './entities/Patient';
import { Stage } from './entities/Task';
import { File_Resolver } from './resolvers/File/file';
import { Hr_Assignee_Resolver } from './resolvers/HrAssignee/hr_assignee';
import { Patient_Resolver } from './resolvers/Patient/patient';
import { ServiceLogResolver } from './resolvers/Service Log';
import { Task_Resolver } from './resolvers/TaskResolver/task';

export const redis = new Redis(process.env['REDIS_URL']);
export const main = async () => {
  const app = express();

  const RedisStore = connectRedis(session);
  app.set('trust proxy', 1);
  app.use(
    cors({
      origin: [
        process.env['CORS_ORIGIN']!,
        process.env['CORS_ORIGIN_GRAPHQL']!,
      ],
      credentials: true,
    })
  );
  app.use(
    session({
      name: COOKIE_NAME,
      store: new RedisStore({
        client: redis,
        disableTouch: true,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
        httpOnly: true,
        sameSite: 'lax', // csrf
        secure: __prod__, // cookie only works in https
        domain: __prod__ ? '.codeponder.com' : undefined,
      },
      saveUninitialized: false,
      secret: process.env['SESSION_SECRET']!,
      resave: false,
    })
  );

  registerEnumType(Stage, { name: 'Stage' });
  registerEnumType(Gender, { name: 'Gender' });
  registerEnumType(HR_Type, { name: 'HR_Type' });

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [
        File_Resolver,
        Patient_Resolver,
        Task_Resolver,
        Hr_Assignee_Resolver,
        ServiceLogResolver,
      ],
      validate: false,
    }),
    context: ({ req, res }) => ({
      req,
      res,
      redis,
    }),
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  app.listen(parseInt(process.env['PORT']!), () => {
    console.log('server started on localhost:4000');
  });
};
