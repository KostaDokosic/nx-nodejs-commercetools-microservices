import { createAuthApp } from './app';

const app = createAuthApp();
const port = process.env.PORT || 3335;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api/auth`);
});
server.on('error', console.error);
