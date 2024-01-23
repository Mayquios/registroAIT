// realizando consultas 
import { Pool}  from "../database/connection";

const findAll = async ()  => {
    const resultado = await pool.query ("SELECT * FROM todos");
    return resultado;

}

export const todoModel  = {
    findAll,
}