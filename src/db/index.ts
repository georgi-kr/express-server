import { Sequelize } from 'sequelize';
import { db_host, db_name, db_password, db_user } from '../config';

const sequelize = new Sequelize(db_name, db_user, db_password, {
  host: db_host,
  dialect: 'postgres',
});

sequelize
  .sync()
  .then(() => {
    console.log('Synced db.');
  })
  .catch((err) => {
    console.log('Failed to sync db: ' + err.message);
  });

export { sequelize };
