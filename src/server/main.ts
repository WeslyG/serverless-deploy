import { ClassSerializerInterceptor, Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { swaggerLoad } from './swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');
  const port = 3005;
  const appUrl = `http://localhost:${port}`;
  const reflector = app.get(Reflector);

  // Validation request data to Type in code
  app.useGlobalInterceptors(new ClassSerializerInterceptor(reflector));

  // Transform request data to type with class-transformer
  // whitelist - only allowed data confirm in req object
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      // https://stackoverflow.com/questions/59531427/why-should-we-not-use-enableimplicitconversion-when-using-class-transformer
      transformOptions: {
        enableImplicitConversion: false,
      },
    }),
  );

  app.enableShutdownHooks();

  swaggerLoad(app, '');

  await app.listen(port);
  logger.log(`Server started on ${appUrl}`);
  logger.warn(`Swagger UI: ${appUrl}/swagger`);
}
bootstrap();
