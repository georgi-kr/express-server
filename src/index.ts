import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { port } from './env';
import connection from './db/connection';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

const initDatabase = async (): Promise<void> => {
  try {
    await connection.sync({ force: true });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

const initServer = (): void => {
  app.listen(port, () => {
    console.log('Server started on port 3000');
  });
};

const init = (services: Array<() => void>): void => {
  services.forEach((service) => service());
};

init([initDatabase, initServer]);
