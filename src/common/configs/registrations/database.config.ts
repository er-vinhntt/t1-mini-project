import { AppHelper } from '@/common';
import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as Joi from 'joi';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const database = registerAs('database', () => {
  return {
    type: 'mysql',
    url: process.env.DB_URL,
    entities: [`${AppHelper.getRootDir()}/entities/*.entity.{ts,js}`],
    autoLoadEntities: true,
    namingStrategy: new SnakeNamingStrategy(),
    synchronize: process.env.TYPEORM_SYNC === 'true',
  } as const satisfies TypeOrmModuleOptions;
});

export const dbConfigJoiSchema = {
  DB_NAME: Joi.string(),
  DB_HOST: Joi.string(),
  DB_USER: Joi.string(),
  DB_ROOT_PASSWORD: Joi.string(),
  DB_PASSWORD: Joi.string(),
  DB_PORT: Joi.number(),
  DB_URL: Joi.string(),
};
