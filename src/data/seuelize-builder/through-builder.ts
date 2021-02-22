import { FindAttributeOptions, IncludeThroughOptions, WhereOptions } from "sequelize/types";

class ThroughBuilder {
  private throughObj: IncludeThroughOptions = {};

  apply() {
    return this.throughObj;
  }

  as(as: string): this {
    this.throughObj.as = as;
    return this;
  }

  select(attributes: FindAttributeOptions) {
    this.throughObj.attributes = attributes;
    return this;
  }

  where(filter: WhereOptions) {
    this.throughObj.where = filter;
    return this;
  }
}

export default ThroughBuilder;
