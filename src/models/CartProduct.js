import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const CartProduct = sequelize.define("cart_product", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
});
