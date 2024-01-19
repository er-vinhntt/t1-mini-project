import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import * as compression from 'compression';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { Config } from './common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const cfgService = app.get<ConfigService<Config>>(ConfigService);
  const { port, prefix } = cfgService.get('app', { infer: true });

  // Global Middleware
  app.use(helmet());
  app.use(compression());
  app.enableCors({
    maxAge: 5000,
    origin: '*', //  only dev mode
  });

  app.setGlobalPrefix(prefix);

  app.enableShutdownHooks();

  await app.listen(port);
}
bootstrap();
