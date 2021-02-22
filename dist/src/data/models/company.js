"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const base_model_1 = __importDefault(require("../../lib/base-model"));
class Company extends base_model_1.default {
    static initialize(sequelize) {
        return super.init({
            name: sequelize_1.DataTypes.STRING,
            activation: sequelize_1.DataTypes.STRING,
            sector_id: sequelize_1.DataTypes.STRING,
            country_id: sequelize_1.DataTypes.STRING
        }, {
            sequelize,
            underscored: true,
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        });
    }
}
exports.default = Company;
//# sourceMappingURL=company.js.map