import type { Knex } from "knex";
import { config as dotenvConfig } from "dotenv";
dotenvConfig();

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "mysql2",
    connection: {
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  }
};

module.exports = config;
