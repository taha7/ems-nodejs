"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const base_model_1 = __importDefault(require("../../lib/base-model"));
class ClientType extends base_model_1.default {
    static get INVESTOR_TYPE() {
        return 1;
    }
    static get PRESENTER_TYPE() {
        return 2;
    }
    static get OTHER_TYPE() {
        return 3;
    }
    static initialize(sequelize) {
        return super.init({
            name: sequelize_1.DataTypes.STRING,
            activation: sequelize_1.DataTypes.STRING,
            type: sequelize_1.DataTypes.STRING,
        }, {
            scopes: this.associatedScopes,
            sequelize,
            underscored: true,
            timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at",
        });
    }
    static get associatedScopes() {
        return {
            typeIn(types) {
                return {
                    where: {
                        type: { [sequelize_1.Op.in]: types },
                    },
                };
            },
            investors: {
                where: {
                    type: this.INVESTOR_TYPE,
                },
            },
            presenters: {
                where: {
                    type: this.PRESENTER_TYPE,
                },
            },
        };
    }
    static initRelations(models) {
        this.hasMany(models.Client, { foreignKey: "client_type_id", as: "clients" });
    }
}
exports.default = ClientType;
//# sourceMappingURL=client-type.js.map