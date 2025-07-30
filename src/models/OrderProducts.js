import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const OrderProduct = sequelize.define("order_product", {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  priceUnit: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});
