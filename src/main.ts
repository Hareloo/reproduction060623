import { config } from 'dotenv';
config({ path: 'test.env' });
console.log(process.env.TEST);

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
