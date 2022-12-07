const express = require('express');
const conectarDB = require('./config/db');

//Creamos el Servidor
const app = express();

//Conectamos a la BD
conectarDB();
app.use(express.json());

app.use('/api/productos', require('./routes/producto'));
app.use('/api/usuarios', require('./routes/login'));
app.use('/api/preestudio', require('./routes/preestudio'));

//Definimos Ruta
//app.get('/', (req,res)=>{
//    res.send('Hola mundo');
//})

app.listen(4000,()=>{
    console.log('El servidor está corriendo perfectamente')
})