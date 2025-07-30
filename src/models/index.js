import { User } from "./User.js";
import { Product } from "./Product.js";
import { Cart } from "./Cart.js";
import { CartProduct } from "./CartProduct.js";
import { Order } from "./Order.js";
import { OrderProduct } from "./OrderProducts.js";

// Un usuario tiene un carrito
User.hasOne(Cart);
Cart.belongsTo(User);

// Un carrito puede tener muchos productos y viceversa, con cantidad
Cart.belongsToMany(Product, { through: CartProduct });
Product.belongsToMany(Cart, { through: CartProduct });

// Usuario - Orden
User.hasMany(Order);
Order.belongsTo(User);

// Orden - Productos (relación con cantidad y precio unitario)
Order.belongsToMany(Product, { through: OrderProduct });
Product.belongsToMany(Order, { through: OrderProduct });

// export { User, Product, Cart, CartProduct, Order, OrderProduct };
