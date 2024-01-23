import 'dotenv/config'   
import express  from 'express';



const app =  express();

app.get ('/', (req,res) => {
    res.json ({message: "respuesta del sevidor Registro AIT"});
    
});


const PORT = process.env.PORT || 5000;
app.listen (PORT, () => {
    console.log ("Servidor escuchando en el puerto",PORT)    
});


