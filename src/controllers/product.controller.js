import { Product } from "../models/Product.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.send(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, description, price, priority, img } = req.body;

    const newProyect = await Product.create({
      name,
      description,
      price,
      priority,
      img,
    });
    res.send(newProyect);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    product.update(req.body);
    res.json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await Product.findByPk(id);
    if (!producto) {
      return res.status(404).send(`El producto con id ${id} no existe`);
    }

    await Product.destroy({ where: { id } });
    res.send(
      `El producto "${producto.name}" con id ${id} fue eliminado exitosamente!`
    );
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProductId = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product)
      return res.status(400).json({ message: "El producto no existe" });
    res.send(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
