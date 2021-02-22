"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const database_conn_1 = __importDefault(require("../connections/database.conn"));
const string_service_1 = __importDefault(require("../services/lib/string.service"));
class Database {
    constructor() {
        this.modelsPath = path_1.default.join(__dirname, "../data/models");
    }
    init() {
        this.loadModels();
        this.initModels();
        this.initRelations();
        this.sequelize = database_conn_1.default;
        this.Sequelize = sequelize_1.Sequelize;
    }
    getModels() {
        return this.models;
    }
    getModel(modelName) {
        return this.models[modelName];
    }
    loadModels() {
        const modelsFiles = fs_1.default
            .readdirSync(this.modelsPath)
            .filter((file) => new string_service_1.default(file).lastSplit(".").apply() == "js");
        this.models = {};
        // eslint-disable-next-line no-restricted-syntax
        for (const modelFile of modelsFiles) {
            const model = new string_service_1.default(modelFile)
                .firstSplit(".")
                .formKebabToPascal()
                .apply();
            console.log(model);
            this.models[model] = require(path_1.default.join(this.modelsPath, modelFile)).default;
        }
    }
    initModels() {
        Object.keys(this.models).forEach((modelName) => {
            const Model = this.models[modelName];
            Model.initialize(database_conn_1.default);
        });
    }
    initRelations() {
        Object.keys(this.models).forEach((modelName) => {
            const Model = this.models[modelName];
            if ("initRelations" in Model) {
                Model.initRelations(this.models);
            }
        });
    }
}
exports.default = new Database();
//# sourceMappingURL=database.js.map