import { Hono } from 'hono';
import authRouter from '@/routes/auth';

const app = new Hono();

const routes = [authRouter];

routes.forEach((r) => {
  app.basePath('/api').route('/', r);
});

export default {
  port: 3000,
  hostname: '0.0.0.0',
  fetch: app.fetch,
};
