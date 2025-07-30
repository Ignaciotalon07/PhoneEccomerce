import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Order = sequelize.define("order", {
  status: {
    type: DataTypes.STRING,
    defaultValue: "pendiente", // otras: "pagada", "enviada", etc.
  },
  total: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});
