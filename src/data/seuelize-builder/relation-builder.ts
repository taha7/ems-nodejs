import Model, {
  FindAttributeOptions,
  IncludeOptions,
  IncludeThroughOptions,
} from "sequelize/types/lib/model";

class RelationBuilder {
  private relationObject: IncludeOptions;

  constructor(model: typeof Model) {
    this.relationObject = { model };
  }

  apply() {
    return this.relationObject;
  }

  select(attributes: FindAttributeOptions) {
    this.relationObject.attributes = attributes;
    return this;
  }

  as(as: string) {
    this.relationObject.as = as;
    return this;
  }

  through(through: IncludeThroughOptions) {
    this.relationObject.through = through;
    return this;
  }
}

// {
//     attributes: ["id", "name"],
//     model: Conference.scope({ method: ["inConf", 37] }),
//     as: "conferences",
//     through: {
//       as: "conference_client",
//       attributes: ["available_slot"],
//       where: {
//         status: ConfClient.REGISTERED_STATUS,
//       },
//     },
//   }

export default RelationBuilder;
