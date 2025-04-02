import pool from "../db/db.js";

// Todo de aqui en adelante viene desde la BD

// Obtiene todos los usuarios
export const getAllUsarios = async () => {
  const result = await pool.query("SELECT * FROM usuarios");
  return result.rows;
};

// Crear un nuevo usuario

// Actualiza un usuario existente

// Elimina un usuario
