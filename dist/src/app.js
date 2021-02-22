"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_handlebars_1 = __importDefault(require("express-handlebars"));
const path_1 = __importDefault(require("path"));
const reports_router_1 = __importDefault(require("./routes/admin/reports.router"));
const database_1 = __importDefault(require("./lib/database"));
class App {
    constructor() {
        this.app = express_1.default();
        database_1.default.init();
        this.beforeMiddlewares();
        this.routes();
        this.afterMiddlewares();
    }
    beforeMiddlewares() {
        const { app } = this;
        const hbs = express_handlebars_1.default.create({
            layoutsDir: path_1.default.resolve(__dirname, "./views/layouts"),
            extname: "handlebars",
        });
        app.engine("handlebars", hbs.engine);
        app.set("view engine", "handlebars");
        app.set("views", path_1.default.resolve(__dirname, "./views"));
        app.use(express_1.default.json());
        app.use(express_1.default.static("public"));
    }
    routes() {
        const { app } = this;
        app.use(`/admin/reports`, reports_router_1.default);
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
exports.default = new App().app;
//# sourceMappingURL=app.js.map