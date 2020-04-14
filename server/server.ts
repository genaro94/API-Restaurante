import * as restify from "restify";
import { environment } from "../common/environment";

export class Server {
  application: restify.Server;
  initRoutes(): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        this.application = restify.createServer({
          name: "meat-api",
          version: "1.0.0",
        });

        this.application.use(restify.plugins.queryParser());

        //routes
        this.application.get("/hello", (req, resp, next) => {
          resp.status(200);
          resp.json({
            message: "hello word",
          });
          return next();
        });

        this.application.listen(environment.server.port, () => {
          resolve(this.application);
        });
      } catch (error) {
        reject(error);
      }
    });
  }
  bootstrap(): Promise<Server> {
    return this.initRoutes().then(() => this);
  }
}
