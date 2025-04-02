import express from "express";
import userRoutes from "./routes/usuarios.routes.js";

const app = express();
const PORT = 3001;

app.use(express.json());

app.use("/usuarios", userRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
