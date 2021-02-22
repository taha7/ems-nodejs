"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const base_model_1 = __importDefault(require("../../lib/base-model"));
class AgendaSlot extends base_model_1.default {
    static initialize(sequelize) {
        return super.init({
            name: sequelize_1.DataTypes.STRING,
            description: sequelize_1.DataTypes.TEXT,
            date: sequelize_1.DataTypes.DATE,
            start_time: sequelize_1.DataTypes.TIME,
            end_time: sequelize_1.DataTypes.TIME,
            type: sequelize_1.DataTypes.INTEGER,
            activation: sequelize_1.DataTypes.BOOLEAN,
            conference_id: sequelize_1.DataTypes.INTEGER,
        }, {
            sequelize,
            underscored: true,
            timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at",
        });
    }
    static initRelations(models) {
        this.belongsTo(models.Conference, { foreignKey: "conference_id", as: "conference" });
    }
}
exports.default = AgendaSlot;
//# sourceMappingURL=agenda-slot.js.map