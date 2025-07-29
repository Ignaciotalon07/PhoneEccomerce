import Cart from "../models/cart.model.js";
import Product from "../models/product.model.js";
import User from "../models/user.model.js";

export const createCart = (req, res) => {
  res.send("Creating cart");
};
export const getCart = (req, res) => {
  res.send("Getting Cart");
};

export const addToCart = (req, res) => {
  res.send("Product add to cart");
};

export const removeFromCart = (req, res) => {
  res.send("Deleted product in cart");
};
