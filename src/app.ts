import express, { Request, Response } from "express";
import exphbs from "express-handlebars";
import path from "path";
import session from 'express-session';

import reportsRouter from "./routes/admin/reports.router";
import db from "./lib/database";

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    db.init();
    this.beforeMiddlewares();
    this.routes();
    this.afterMiddlewares();
  }

  beforeMiddlewares() {
    const { app } = this;

    // Handlebars setup
    const hbs = exphbs.create({
      layoutsDir: path.resolve(__dirname, "../../views/layouts"),
      extname: "handlebars",
    });
    app.engine("handlebars", hbs.engine);
    app.set("view engine", "handlebars");
    app.set("views", path.resolve(__dirname, "../../views"));

    // Handling json request
    app.use(express.json());

    // Sessions
    app.use(session({
      secret: 'key that will sign the cookie',
      resave: false,
      saveUninitialized: false
    }))

    // Serving static files
    app.use(express.static("public"));
  }

  routes() {
    const { app } = this;
    app.use(`/admin/reports`, reportsRouter);
    app.use((req: Request, res: Response) => {
      req.session.isAuth = true;
      // return res.send('here');
      res.render("home");
      // db.getModel('Conference')
      //   .findAll()
      //   .then(clients => res.send(clients))
      //   .catch(e => console.log(e));
    });
  }

  afterMiddlewares() {
    // this.app.use(() => {
    //   let examleTest = 'Hello';
    //   examleTest = 'another';
    //   examleTest = 'third';
    //   console.log(examleTest);
    // });
  }
}

export default new App().app;
