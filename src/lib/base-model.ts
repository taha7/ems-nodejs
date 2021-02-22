import { Model, Sequelize } from "sequelize";
import DBService from "../services/lib/database.service";
import BaseTrait from "./base-trait";
import { Newable } from "./types";

class BaseModel extends Model {
  public prototype: any;

  public initialize: Function;
  public initRelations: Function;

  static addTrait<TTrait extends BaseTrait>(Trait: Newable<TTrait>) {
    new Trait().register(this);
  }

  public static async usePaginate(queryAppends, { perPage = 20, page = 1 }) {
    return Promise.all([
      this.findAll({
        ...queryAppends,
        ...DBService.paginate(perPage, page),
      }),
      this.count(queryAppends),
    ]);
  }
}

export default BaseModel;
