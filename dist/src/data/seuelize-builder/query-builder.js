"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class QueryBuilder {
    constructor() {
        this.queryObject = {};
    }
    apply() {
        return this.queryObject;
    }
    select(attributes) {
        this.queryObject.attributes = attributes;
        return this;
    }
    include(relation) {
        if (!this.queryObject.include) {
            this.queryObject.include = [relation];
        }
        else {
            this.queryObject.include = [...this.queryObject.include, relation];
        }
        return this;
    }
    order(order) {
        if (!this.queryObject.order) {
            this.queryObject.order = [order];
        }
        else {
            this.queryObject.order = [...this.queryObject.order, order];
        }
        return this;
    }
}
exports.default = QueryBuilder;
//# sourceMappingURL=query-builder.js.map