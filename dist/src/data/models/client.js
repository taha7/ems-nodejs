"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../../lib/database"));
const base_model_1 = __importDefault(require("../../lib/base-model"));
class Client extends base_model_1.default {
    static initialize(sequelize) {
        return super.init({
            first_name: sequelize_1.DataTypes.STRING,
            middle_name: sequelize_1.DataTypes.STRING,
            family_name: sequelize_1.DataTypes.STRING,
            job_title: sequelize_1.DataTypes.STRING,
            email: sequelize_1.DataTypes.STRING,
            telephone: sequelize_1.DataTypes.STRING,
            mobile: sequelize_1.DataTypes.STRING,
            fax: sequelize_1.DataTypes.STRING,
            additional_email: sequelize_1.DataTypes.STRING,
            assistant_name: sequelize_1.DataTypes.STRING,
            assistant_phone: sequelize_1.DataTypes.STRING,
            assistant_email: sequelize_1.DataTypes.STRING,
            primary_signatory_id: sequelize_1.DataTypes.STRING,
            secondary_signatory_id: sequelize_1.DataTypes.STRING,
            country_id: sequelize_1.DataTypes.STRING,
            title_id: sequelize_1.DataTypes.INTEGER,
            company_id: sequelize_1.DataTypes.INTEGER,
            client_type_id: sequelize_1.DataTypes.INTEGER,
            name_format_type: sequelize_1.DataTypes.STRING,
            sort: sequelize_1.DataTypes.STRING,
            nationality_id: sequelize_1.DataTypes.INTEGER,
            naming_convension: sequelize_1.DataTypes.STRING
        }, {
            sequelize,
            underscored: true,
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        });
    }
    // static get getterMethods() {
    //   return {
    //     fullTitledName: function() {
    //       return this.getDataValue
    //     }
    //   }
    // }
    static get fullName() {
        return database_1.default.Sequelize.literal("CONCAT(`Client`.`first_name`, ' ' ,`Client`.`family_name`)");
    }
    static initRelations(models) {
        this.belongsToMany(models.Conference, {
            through: models.ConferenceClient,
            foreignKey: 'client_id',
            as: 'conferences'
        });
        this.belongsTo(models.Company, { foreignKey: 'company_id', as: 'company' });
        this.belongsTo(models.ClientType, { as: 'client_type', foreignKey: 'client_type_id' });
        this.belongsTo(models.Title, { as: 'title', foreignKey: 'title_id' });
    }
}
exports.default = Client;
//# sourceMappingURL=client.js.map