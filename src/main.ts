import 'dotenv/config';
import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import connectToDatabase from './common/database';

async function bootstrap() {
  await connectToDatabase();

  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  await app.listen(process.env.PORT || 4005);
}
bootstrap();
