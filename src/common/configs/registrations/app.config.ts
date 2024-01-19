import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';

export const app = registerAs('app', () => {
  return {
    port: +process.env.APP_PORT,
    env: process.env.NODE_ENV,
    prefix: process.env.PREFIX,
  };
});

export const appConfigJoiSchema = {
  APP_PORT: Joi.number().required(),
  NODE_ENV: Joi.string().valid('development', 'production'),
  PREFIX: Joi.string(),
};
