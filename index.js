const express=require('express');
const app=express();
//const routes=require('./routes/routes'); // defino todos los middleware de los modulo
//const modulos=require('./routes/modulos');
//const colegios=require('./routes/colegios');

const estudiantes = require('./routes/estudiante');
const docentes = require('./routes/docente');
const entidades = require('./routes/entidad');
const generacionalerta = require('./routes/generacionalerta');
const administrador = require('./routes/administrador')

// Ajustess 
app.set('port', 3000);//puerto único  //firewall

// middleware
app.use(express.json());
// ajustess
// defino middleware
app.use('/api',estudiantes);
app.use('/api',docentes);
app.use('/api',entidades);
app.use('/api',generacionalerta);
app.use('/api',administrador);

//app.use('/api/modulos',modulos);
//app.use('/api/colegios',colegios);


app.listen(app.get('port'),()=>{
    console.log('listening on port' + app.get('port'));
});
