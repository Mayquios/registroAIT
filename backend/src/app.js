import 'dotenv/config'   
import express  from 'express';
import todoRoute from '../routes/todo.route';


const app =  express();

//app.use (express.json());

app.use ("/api/todo", todoRoute)

const PORT = process.env.PORT || 5000;
app.listen (PORT, () => {
    console.log ("Servidor escuchando en el puerto",PORT)    
});


