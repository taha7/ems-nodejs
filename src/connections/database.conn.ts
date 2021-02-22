import { Sequelize } from "sequelize";

import config from "../../config/database.config";

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
  pool: config.pool,
  define: {
    underscored: true,
  },
});

export default sequelize;
