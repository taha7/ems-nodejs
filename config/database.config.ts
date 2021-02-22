import { Options } from "sequelize";

const config: Options = {
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

export default config;
