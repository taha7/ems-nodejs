"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_trait_1 = __importDefault(require("../lib/base-trait"));
class InConf extends base_trait_1.default {
    register(Model) {
        Model.prototype.inConf = function (id) {
            return {
                where: {
                    id,
                },
            };
        };
    }
}
exports.default = InConf;
//# sourceMappingURL=in-conf.trait.js.map