import { db_host, db_name, db_password, db_user } from '../../config';

export default {
  username: db_user,
  password: db_password,
  database: db_name,
  host: db_host,
  dialect: 'postgres',
};
