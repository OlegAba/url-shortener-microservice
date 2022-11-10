import express, { Application } from "express";
import mongoose, { Error } from "mongoose";

export class App {
  public app: Application;
  private port: string;
  private apiPath: string;
  private staticPath: string;

  constructor(
    port: string,
    middlewares: any[],
    routes: express.Router[],
    apiPath: string,
    staticPath: string
  ) {
    this.app = express();
    this.port = port;
    this.apiPath = apiPath;
    this.staticPath = staticPath;

    this.middlewaresConfig(middlewares);
    this.routesConfig(routes);
    this.assetsConfig(this.staticPath);
  }

  private middlewaresConfig(middlewares: any[]): void {
    middlewares.forEach((middleware) => {
      this.app.use(middleware);
    });
  }

  private routesConfig(routes: express.Router[]): void {
    routes.forEach((route) => {
      this.app.use(this.apiPath, route)
    });
  }

  private assetsConfig(path: string): void {
    this.app.use(express.static(path));
  }

  public addMiddleware(middleware: any): void {
    this.app.use(middleware);
  }

  public connectMongoDB(uri: string): void {
    const connect = () => {
      mongoose.connect(uri)
        .then(() => {
          console.log('CONNECTED TO API DATABASE');
          return;
        })
        .catch((err: Error) => {
          console.log('API DATABASE CONNECTION ERROR \n', err.message);
          return process.exit(1);
        });
    };

    connect();

    mongoose.connection.on('disconnected', connect);
  }

  public listen(): void {
    this.app.listen(this.port, (): void => {
      console.log('APP LISTENING ON PORT', this.port);
    });
  }
}