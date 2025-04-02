import { readFile, writeFile } from "fs/promises";
import { getAllUsarios } from "../models/usuarios.model.js";

export const getUsuarios = async (req, res) => {
  const usuarios = await getAllUsarios();
  res.json(usuarios);
};

// Crear usuarios

export const createUsuario = async (req, res) => {
  const data = await readFile("./data/usuarios.json");
  const usuarios = JSON.parse(data);

  const nuevoUsuario = {
    id: usuarios.length + 1,
    nombre: req.body.nombre,
  };

  usuarios.push(nuevoUsuario);
  await writeFile("./data/usuarios.json", JSON.stringify(usuarios, null, 2));

  res.status(201).json(nuevoUsuario);
};

// Actualizar un usuario

export const updateUsuario = async (req, res) => {
  const data = await readFile("./data/usuarios.json");
  const usuarios = JSON.parse(data);

  const id = parseInt(req.params.id);
  const usuario = usuarios.find((u) => u.id === id);

  usuario.nombre = req.body.nombre;

  await writeFile("./data/usuarios.json", JSON.stringify(usuarios, null, 2));

  res.json(usuario);
};

// borrar un usuario

export const deleteUsuario = async (req, res) => {
  const data = await readFile("./data/usuarios.json");
  const usuarios = JSON.parse(data);

  const id = parseInt(req.params.id);
  const usuariosFiltrados = usuarios.filter((u) => u.id !== id);

  await writeFile(
    "./data/usuarios.json",
    JSON.stringify(usuariosFiltrados, null, 2)
  );

  res.send(`se elimino el usuario con ID : ${id}`);
};
