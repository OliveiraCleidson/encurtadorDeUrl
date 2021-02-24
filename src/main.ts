import 'dotenv/config';
import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import connectToDatabase from './common/database';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HttpStatus, Logger, ValidationPipe } from '@nestjs/common';
import { AppErrorFilter } from './common/http/appError.filter';
import { AllExceptionsFilter } from './common/http/globalError.filter';

async function bootstrap() {
  await connectToDatabase();
  const logger = new Logger('Server');

  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE,
    }),
  );

  app.useGlobalFilters(new AllExceptionsFilter());
  app.useGlobalFilters(new AppErrorFilter());

  const config = new DocumentBuilder()
    .setTitle('Encurtador URL')
    .setDescription('Simple and scalable API to shorten urls')
    .setVersion('1.0')

    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  logger.log(`Running in ${process.env.PORT}`);
  await app.listen(process.env.PORT || 4005);
}
bootstrap();
