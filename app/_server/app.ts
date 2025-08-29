import { createApp } from '@kottster/server';
import schema from '../../kottster-app.json';

export const app = createApp({
  schema,
  secretKey: process.env.NODE_ENV === 'development'
    ? process.env.DEV_SECRET_KEY
    : process.env.SECRET_KEY,
});