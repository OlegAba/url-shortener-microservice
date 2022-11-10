import express, { Application, Response, Router } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import Routes from './api/Routes';

class Server {
  public app: Application;
  private routes: Router;
  private readonly port: string;

  constructor() {
    dotenv.config();
    this.app = express();
    this.routes = Router();
    this.port = process.env.PORT || '8080';
    this.routesConfig();
    this.middlewareConfig();
  }

  public start(): void {
    this.app.listen(this.port, (): void => {
      console.log(`Server running on port: ${ this.port }`);
    });
  }

  private routesConfig(): void {
    this.routes.use('/api', Routes);
  }

  private middlewareConfig(): void {
    this.app.use(cors({ 
      origin: [
        'http://localhost:3000',
        'https://www.freecodecamp.org'
      ],
      credentials: true,
      optionsSuccessStatus: 200
    }))

    this.app.use('/', this.routes);

    if (process.env.NODE_ENV === 'production') {
      console.log("RUNNING IN PRODUCTION")

      const buildPath = path.join(__dirname, '..', '..', 'client', 'build');

      this.app.use(express.static(buildPath)); 

      this.app.get('*', (_, res: Response) => {
        res.sendFile(path.resolve(buildPath, 'index.html'));
      });
    }
  }
}

new Server().start();