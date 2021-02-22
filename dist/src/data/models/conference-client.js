"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const base_model_1 = __importDefault(require("../../lib/base-model"));
class ConferenceClient extends base_model_1.default {
    static get HOLDED_STATUS() {
        return 0;
    }
    static get ACCEPTED_STATUS() {
        return 1;
    }
    static get REGISTERED_STATUS() {
        return 2;
    }
    static get CANCELLED_STATUS() {
        return 3;
    }
    static get DECLINED_STATUS() {
        return 4;
    }
    static initialize(sequelize) {
        return super.init({
            conference_id: sequelize_1.DataTypes.STRING,
            client_id: sequelize_1.DataTypes.STRING,
            status: sequelize_1.DataTypes.INTEGER,
            business_acceptance: sequelize_1.DataTypes.INTEGER,
            business_acceptance_reason: sequelize_1.DataTypes.TEXT,
            invitation_code: sequelize_1.DataTypes.STRING,
            complete_survey: sequelize_1.DataTypes.BOOLEAN,
            arrival_date: sequelize_1.DataTypes.STRING,
            arrival_time: sequelize_1.DataTypes.STRING,
            departure_date: sequelize_1.DataTypes.STRING,
            departure_time: sequelize_1.DataTypes.STRING,
            remarks: sequelize_1.DataTypes.TEXT,
            available_slot: sequelize_1.DataTypes.TEXT,
            is_disable: sequelize_1.DataTypes.BOOLEAN,
            disable_reason: sequelize_1.DataTypes.STRING,
            prefer_interview: sequelize_1.DataTypes.BOOLEAN,
            registration_date: sequelize_1.DataTypes.DATE
        }, {
            sequelize,
            underscored: true,
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        });
    }
}
exports.default = ConferenceClient;
//# sourceMappingURL=conference-client.js.map