import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { sequelize } from './db/index';
import models from './db/models';
void models, sequelize;

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
