"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const base_model_1 = __importDefault(require("../../lib/base-model"));
const in_conf_trait_1 = __importDefault(require("../../traits/in-conf.trait"));
class Conference extends base_model_1.default {
    static initialize(sequelize) {
        this.addTrait(in_conf_trait_1.default);
        return super.init({
            name: sequelize_1.DataTypes.STRING,
            location: sequelize_1.DataTypes.STRING,
            start_date: sequelize_1.DataTypes.STRING,
            end_date: sequelize_1.DataTypes.STRING,
            registeration_deadline: sequelize_1.DataTypes.STRING,
            subdomain: sequelize_1.DataTypes.STRING,
            enable_login: sequelize_1.DataTypes.STRING,
            web_enable_preferences: sequelize_1.DataTypes.STRING,
            web_enable_register: sequelize_1.DataTypes.STRING,
            web_enable_remark_box: sequelize_1.DataTypes.STRING,
            mobile_enable: sequelize_1.DataTypes.STRING,
            small_group_definition: sequelize_1.DataTypes.STRING,
            hotel_accommodation: sequelize_1.DataTypes.STRING,
            split_days: sequelize_1.DataTypes.STRING,
            investor_selection_limit: sequelize_1.DataTypes.STRING,
            allow_big_groups: sequelize_1.DataTypes.STRING,
            min_media_slot: sequelize_1.DataTypes.STRING,
            max_media_slot: sequelize_1.DataTypes.STRING,
            title: sequelize_1.DataTypes.STRING,
            is_virtual: sequelize_1.DataTypes.STRING,
            meeting_link_status: sequelize_1.DataTypes.STRING
        }, {
            scopes: {
                inConf: confId => new this().inConf.bind(this)(confId)
            },
            sequelize,
            underscored: true,
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        });
    }
    static initRelations(models) {
        this.belongsToMany(models.Client, {
            through: models.ConferenceClient,
            foreignKey: 'conference_id',
            as: 'clients'
        });
    }
}
exports.default = Conference;
//# sourceMappingURL=conference.js.map