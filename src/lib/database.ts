import { Sequelize } from "sequelize";
import path from "path";
import fs from "fs";

import sequelize from "../connections/database.conn";
import Str from "../services/lib/string.service";
import BaseModel from "./base-model";

export type ModelsObject = { [key: string]: BaseModel };

class Database {
  modelsPath: string;
  sequelize: Sequelize;
  Sequelize: typeof Sequelize;
  models: ModelsObject;

  constructor() {
    this.modelsPath = path.join(__dirname, "../data/models");
  }

  init() {
    this.loadModels();
    this.initModels();
    this.initRelations();
    this.sequelize = sequelize;
    this.Sequelize = Sequelize;
  }

  getModels(): ModelsObject {
    return this.models;
  }

  getModel(modelName: string): BaseModel {
    return this.models[modelName];
  }

  loadModels() {
    const modelsFiles = fs
      .readdirSync(this.modelsPath)
      .filter((file) => new Str(file).lastSplit(".").apply() == "js");      

    this.models = {};

    // eslint-disable-next-line no-restricted-syntax
    for (const modelFile of modelsFiles) {
      const model: string = new Str(modelFile)
        .firstSplit(".")
        .formKebabToPascal()
        .apply();
      console.log(model);
      this.models[model] = require(path.join(this.modelsPath, modelFile)).default;
    }
  }

  initModels() {
    Object.keys(this.models).forEach((modelName: string) => {
      const Model: BaseModel = this.models[modelName];
      Model.initialize(sequelize);
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

export default new Database();
