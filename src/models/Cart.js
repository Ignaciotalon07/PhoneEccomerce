import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Cart = sequelize.define("cart", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});
