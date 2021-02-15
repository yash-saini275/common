import * as express from 'express';
import {Request, Response, Router, Express} from 'express';
import 'express-async-errors';
import {errorHandler, NotFoundError} from './index';

class App {
  private app: Express = express();
  constructor(private routes: Router[], private middlewares: any[]) {
    this.app.set('trust proxy', true);

    // Configure Middlewares
    middlewares.forEach((middleware, index, array) => {
      this.app.use(middleware);
    });

    // Configure Routes
    routes.forEach((route, index, array) => {
      this.app.use(route);
    });

    // If No route is found
    this.app.use('*', async (req: Request, res: Response) => {
      throw new NotFoundError();
    });

    // Error Handler
    this.app.use(errorHandler);
  }

  public start(portNumber: number) {
    this.app.listen(portNumber);
    console.log(`Server listening on ${portNumber}.`);
  }

  public getApp() {
    return this.app;
  }
}

export {App};
