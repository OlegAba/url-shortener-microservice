import dotenv from 'dotenv';
import path from 'path';
import { App } from './app';
import { middlewares } from './middlewares';
import shorturlRouter from './api/shorturl/shorturl.router'

dotenv.config();
const PORT = process.env.PORT || '8080';
const CONNECTION_URL = process.env.CONNECTION_URL;
const apiPath = '/api';
const buildPath = path.join(__dirname, '..', '..', 'client', 'build');

const app = new App(
  PORT, 
  middlewares,
  [shorturlRouter],
  apiPath,
  buildPath
);

CONNECTION_URL 
  ? app.connectMongoDB(CONNECTION_URL) 
  : console.log('NO CONNECTION_URL FOUND');

app.listen();