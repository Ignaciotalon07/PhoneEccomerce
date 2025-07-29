import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("bd_productos", "soporte", "soporte", {
  host: "localhost",
  dialect: "postgres",
});
