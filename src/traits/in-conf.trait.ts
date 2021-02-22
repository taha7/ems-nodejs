import BaseModel from "../lib/base-model";
import BaseTrait from "../lib/base-trait";
import { Newable } from "../lib/types";

class InConf extends BaseTrait {
  register<TModel extends BaseModel>(Model: Newable<TModel>) {
    Model.prototype.inConf = function(id: number|string) {
      return {
        where: {
          id,
        },
      };
    };
  }
}

export default InConf;
