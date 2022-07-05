import { Sequelize } from "sequelize";

let sequelize: Sequelize;

if (!process.env.APP_PRODUCTION) {
  sequelize = new Sequelize({
    username: process.env.APP_USER,
    password: process.env.APP_PASSWORD,
    database: process.env.APP_DATABASE,
    host: process.env.APP_HOST,
    dialect: "mysql",
  });
}

export { sequelize };
