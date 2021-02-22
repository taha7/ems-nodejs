"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RelationBuilder {
    constructor(model) {
        this.relationObject = { model };
    }
    apply() {
        return this.relationObject;
    }
    select(attributes) {
        this.relationObject.attributes = attributes;
        return this;
    }
    as(as) {
        this.relationObject.as = as;
        return this;
    }
    through(through) {
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
exports.default = RelationBuilder;
//# sourceMappingURL=relation-builder.js.map