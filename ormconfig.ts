// import path from 'path'

module.exports = [
  {
    type: 'postgres',
    url: process.env['DATABASE_URL'],
    logging: true,
    synchronize: true,
    entities: [
      __dirname + '/dist/apps/dentlist/src/app/entities/*.entity{.ts,.js}',
    ],
    migrations: [
      __dirname + '/dist/apps/dentlist/src/app/**/*.migrations{.ts,.js}',
    ],
    cli: {
      entitiesDir: 'dist/src/entity',
      migrationsDir: 'dist/src/migration',
    },
  },
];
