//exportaciones
import 'dotenv/config'  
import pkg from 'pg'
const { Pool } = pkg;
//cerrar conexiones lo mas rapido posible
export const pool =new Pool ({
    allowExitOnIdle:true
});

// mostrar errores si falla la conexion
try {
    await pool.query('SELECT NOW()')
    console.log('Base de datos conectada')
} catch (error) {
    
}