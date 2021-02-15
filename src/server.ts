import {Router} from 'express';

import {App} from './app';

class Server {
  private app: App;
  constructor(private routes: Router[], private middlewares: any[]) {
    this.app = new App(this.routes, this.middlewares);

  }

  public getApp() {
    return this.app.getApp();
  }

  public startServer(portNumber: number) {
    this.app.start(portNumber);
  }
}

export {Server};