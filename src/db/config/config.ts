// This config file is for using the sequelize-cli commands
import { db_dialect, db_host, db_name, db_password, db_user } from '../../env';

const config = {
  // declare object for each environment if needed
  local: {
    username: db_user,
    password: db_password,
    database: db_name,
    host: db_host,
    dialect: db_dialect,
  },
};

module.exports = config;
