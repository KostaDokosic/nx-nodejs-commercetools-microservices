import * as express from 'express';
import authRouter from '../router/authRouter';

export const createAuthApp = () => {
  const app = express();

  app.set('trust proxy', true);
  app.use(express.json());

  app.use('/api/auth', authRouter);
  return app;
};
