import { Router, Request, Response } from 'express';

const authRouter = Router();

authRouter.get('/', (req: Request, res: Response) => {
  return res.json({ message: 'Hello World' });
});

export default authRouter;
