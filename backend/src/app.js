import 'dotenv/config'   
import express  from 'express';



const app =  express();

//app.use (express.json());
app.get ('/', (req,res) => {
    res.json ({message: "resp"});
    
});



app.use ("/api/todo", todoRoute)

const PORT = process.env.PORT || 5000;
app.listen (PORT, () => {
    console.log ("Servidor escuchando en el puerto",PORT)    
});


