import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProductId,
  getProducts,
  updateProduct,
} from "../controllers/product.controller.js";

const router = Router();

router.get("/products", getProducts);
router.post("/products", createProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);
router.get("/products/:id", getProductId);

export default router;
