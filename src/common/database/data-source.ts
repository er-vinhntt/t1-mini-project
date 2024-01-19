/* This file is used for database migration */

import { Logger } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as dotenvExpand from 'dotenv-expand';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { AppHelper } from '../helpers';

dotenvExpand.expand(
  dotenv.config({
    path: `.env.${AppHelper.isProd() ? 'production' : 'development'}`,
  }),
);

const logger = new Logger('DataSource');
logger.log('Load Datasource');
logger.log(`${AppHelper.getRootDir()}/entities/*.entity.ts`);

const dataSourceOptions = {
  type: 'mysql',
  url: process.env.DB_URL,
  entities: [`${AppHelper.getRootDir()}/entities/*.entity.ts`],
  namingStrategy: new SnakeNamingStrategy(),
  migrations: ['migrations/*.ts'],
} as DataSourceOptions;

export default new DataSource({
  ...dataSourceOptions,
});
