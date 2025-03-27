import express from "express";
import { readFile, writeFile } from "fs/promises";

const app = express();
const PORT = 3001;

app.use(express.json());

// LEER LOS USUARIOS
app.get("/usuarios", async (req, res) => {
  const data = await readFile("./data/usuarios.json");
  const usuarios = JSON.parse(data);
  res.json(usuarios);
});

// CREAR UN USUARIO
app.post("/usuarios", async (req, res) => {
  const data = await readFile("./data/usuarios.json");
  const usuarios = JSON.parse(data);

  const nuevoUsuario = {
    id: usuarios.length + 1,
    nombre: req.body.nombre,
  };

  usuarios.push(nuevoUsuario);
  await writeFile("./data/usuarios.json", JSON.stringify(usuarios, null, 2));

  res.status(201).json(nuevoUsuario);
});

// UPDATE A UN USUARIO
app.put("/usuarios/:id", async (req, res) => {
  const data = await readFile("./data/usuarios.json");
  const usuarios = JSON.parse(data);

  const id = parseInt(req.params.id);
  const usuario = usuarios.find((u) => u.id === id);

  usuario.nombre = req.body.nombre;

  await writeFile("./data/usuarios.json", JSON.stringify(usuarios, null, 2));

  res.json(usuario);
});

// BORRAR UN USUARIO
app.delete("/usuarios/:id", async (req, res) => {
  const data = await readFile("./data/usuarios.json");
  const usuarios = JSON.parse(data);

  const id = parseInt(req.params.id);
  const usuariosFiltrados = usuarios.filter((u) => u.id !== id);

  await writeFile(
    "./data/usuarios.json",
    JSON.stringify(usuariosFiltrados, null, 2)
  );

  res.send(`se elimino el usuario con ID : ${id}`);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

// ASI SE DEBE VER SU CRUD.JS ==> ESTUDIAR MODELO VISTA CONTROLADOR Y COMO
// SEPARAR TODA ESTA LOGICA COMO SE HARIA EN UN ENTORNO REAL DE TRABAJO

// import express from "express";
// import usuariosRoutes from "./routes/usuarios.routes.js";

// const app = express();
// const PORT = 3000;

// app.use(express.json());
// app.use("/usuarios", usuariosRoutes);

// app.listen(PORT, () => {
//   console.log(`Servidor escuchando en http://localhost:${PORT}`);
// });
