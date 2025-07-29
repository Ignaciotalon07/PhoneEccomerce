import { User } from "./User.js";
import { Product } from "./Product.js";
import { Cart } from "./Cart.js";
import { CartProduct } from "./CartProduct.js"; // Modelo intermedio que crearemos

// Un usuario tiene un carrito
User.hasOne(Cart);
Cart.belongsTo(User);

// Un carrito puede tener muchos productos y viceversa, con cantidad
Cart.belongsToMany(Product, { through: CartProduct });
Product.belongsToMany(Cart, { through: CartProduct });
