import pkg from "pg";

const { Pool } = pkg;

// configurar la conexion

const pool = new Pool({
  user: "postgres", // usuario de Postgres
  host: "localhost", // direccion del servidor
  database: "usuarios-bd", // nombre de la base de datos
  password: "postgres", // contraseña
  port: 5432, // puerto por defecto de postgres
  allowExitOnIdle: true, // cierra la conexion despues de cada operacion
});

export default pool;
