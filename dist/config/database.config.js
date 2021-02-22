"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    host: "localhost",
    username: "root",
    password: "",
    database: "ems_stg7",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};
exports.default = config;
//# sourceMappingURL=database.config.js.map