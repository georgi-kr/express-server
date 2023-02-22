import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { port } from './config';
import connection from './db/connection';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});
// ...

const start = async (): Promise<void> => {
  try {
    await connection.sync({ force: true });

    app.listen(port, () => {
      console.log('Server started on port 3000');
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
