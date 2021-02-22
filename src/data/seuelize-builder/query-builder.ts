import { FindAttributeOptions, FindOptions, Includeable, Order, OrderItem } from "sequelize/types";

class QueryBuilder {
  private queryObject: FindOptions;

  constructor() {
    this.queryObject = {};
  }

  apply(): FindOptions {
    return this.queryObject;
  }

  select(attributes: FindAttributeOptions): this {
    this.queryObject.attributes = attributes;
    return this;
  }

  include(relation: Includeable): this {
    if (!this.queryObject.include) {
      this.queryObject.include = [relation];
    } else {
      this.queryObject.include = [...(this.queryObject.include as Includeable[]), relation];
    }
    return this;
  }

  order(order: OrderItem): this {
    if (!this.queryObject.order) {
      this.queryObject.order = [order];
    } else {
      this.queryObject.order = [...(this.queryObject.order as OrderItem[]), order];
    }    

    return this;
  }
}

export default QueryBuilder;
