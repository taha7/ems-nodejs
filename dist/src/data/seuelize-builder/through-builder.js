"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ThroughBuilder {
    constructor() {
        this.throughObj = {};
    }
    apply() {
        return this.throughObj;
    }
    as(as) {
        this.throughObj.as = as;
        return this;
    }
    select(attributes) {
        this.throughObj.attributes = attributes;
        return this;
    }
    where(filter) {
        this.throughObj.where = filter;
        return this;
    }
}
exports.default = ThroughBuilder;
//# sourceMappingURL=through-builder.js.map