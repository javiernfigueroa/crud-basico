import { Router } from "express";
import {
  createUsuario,
  updateUsuario,
  deleteUsuario,
  getUsuarios,
} from "../controllers/usuarios.controller.js";

const router = Router();

router.get("/", getUsuarios);
router.post("/", createUsuario);
router.put("/:id", updateUsuario);
router.delete("/:id", deleteUsuario);

export default router;
