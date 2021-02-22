"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_config_1 = __importDefault(require("../../config/database.config"));
const sequelize = new sequelize_1.Sequelize(database_config_1.default.database, database_config_1.default.username, database_config_1.default.password, {
    host: database_config_1.default.host,
    dialect: database_config_1.default.dialect,
    pool: database_config_1.default.pool,
    define: {
        underscored: true,
    },
});
exports.default = sequelize;
//# sourceMappingURL=database.conn.js.map