import { DataSource } from 'typeorm';
import { File } from './entities/File';
import { HrAssignee } from './entities/HrAssignee';
import { Patient } from './entities/Patient';
import { Service } from './entities/Service';
import { ServiceLog } from './entities/ServiceLog';
import { Task } from './entities/Task';

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env['DATABASE_URL'],
  synchronize: true,
  logging: true,
  entities: [File, HrAssignee, Patient, Service, ServiceLog, Task],
  subscribers: [],
  migrations: [],
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });
