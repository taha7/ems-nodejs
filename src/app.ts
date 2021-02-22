import express from "express";
import exphbs from "express-handlebars";
import path from "path";
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
    const hbs = exphbs.create({
      layoutsDir: path.resolve(__dirname, "./views/layouts"),
      extname: "handlebars",
    });
    app.engine("handlebars", hbs.engine);
    app.set("view engine", "handlebars");
    app.set("views", path.resolve(__dirname, "./views"));
    app.use(express.json());
    app.use(express.static("public"));
  }

  routes() {
    const { app } = this;
    app.use(`/admin/reports`, reportsRouter);
    app.use((req, res) => {
      return res.send('here');
      // res.render("home");
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
