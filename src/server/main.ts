import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');

  const port = 3005;
  app.enableShutdownHooks();

  await app.listen(port);
  logger.log(`Server started ${port} port`);
}
bootstrap();
