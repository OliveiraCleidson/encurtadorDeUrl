import 'dotenv/config';
import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import connectToDatabase from './common/database';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  await connectToDatabase();

  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  const config = new DocumentBuilder()
    .setTitle('Encurtador URL')
    .setDescription('Uma API simples e escalável que encurta urls')
    .setVersion('1.0')

    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.PORT || 4005);
}
bootstrap();
