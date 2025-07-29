import { Router } from "express";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getUserId,
} from "../controllers/user.controller.js";

const router = Router();

router.get("/users", getUsers);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);
router.get("/users/:id", getUserId);

export default router;
