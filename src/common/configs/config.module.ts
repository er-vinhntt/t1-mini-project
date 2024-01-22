import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import {
  app,
  appConfigJoiSchema,
  database,
  dbConfigJoiSchema,
} from './registrations';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`${process.cwd()}/.env.${process.env.NODE_ENV}`],
      expandVariables: true,
      cache: true,
      load: [app, database],
      validationSchema: Joi.object({
        ...appConfigJoiSchema,
        ...dbConfigJoiSchema,
      }),
    }),
  ],
})
export class NestConfigModule {}
