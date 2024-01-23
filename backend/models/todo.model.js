// realizando consultas correspondientes
import { Pool}  from "../database/connection";

// este metodo hace la conexion  query =>envia una sentencia sql
const findAll = async ()  => {
    const resultado = await pool.query ("SELECT * FROM todos");
    return resultado;

}

export const todoModel  = {
    findAll,
}