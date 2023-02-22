import 'dotenv/config';

const { DB_USERNAME, DB_PASSWORD, DB_NAME, DB_HOSTNAME, DB_PORT } = process.env;

const dialectOptions = {
  ssl: {
    require: true,
    rejectUnauthorized: false,
  },
};

export default {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOSTNAME,
    port: DB_PORT,
    dialect: 'postgres',
    logging: false,
    dialectOptions: DB_HOSTNAME?.includes('localhost') || DB_HOSTNAME?.includes('127.0.0.1') ? {} : dialectOptions,
  },
  test: {
    dialect: 'sqlite',
    force: true,
  },
  production: {
    dialect: 'postgres',
    dialectOptions,
  },
};