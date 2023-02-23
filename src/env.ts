// This config file is to ge the types of the environment variables

import 'dotenv/config';
const port = Number(process.env.port);
const db_host = String(process.env.DB_HOST);
const db_port = Number(process.env.DB_PORT);
const db_name = String(process.env.DB_NAME);
const db_user = String(process.env.DB_USER);
const db_password = String(process.env.DB_PASSWORD);
const db_dialect = String(process.env.DB_DIALECT);

export { port, db_host, db_port, db_name, db_user, db_password, db_dialect };
