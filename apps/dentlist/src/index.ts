import { main } from './app/index';

console.log(
  `Running ${main().catch((err) => {
    console.error(err);
  })}`
);
