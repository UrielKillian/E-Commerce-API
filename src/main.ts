import { Logger, ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Boostrap');
  // Security features
  app.enableCors({
    origin: ['http://localhost:3000'],
    credentials: true,
  });

  // Global Validation Pipe
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  // Api Versioning

  // Swagger Documentation
  const config = new DocumentBuilder()
    .setTitle('E-Commerce')
    .setDescription('E-Commerce API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  // Start Application On Port 3000
  await app.listen(process.env.PORT || 3000);
  logger.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
