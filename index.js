const express=require('express');
const app=express();
//const routes=require('./routes/routes'); // defino todos los middleware de los modulo
//const modulos=require('./routes/modulos');
//const colegios=require('./routes/colegios');

const estudiantes = require('./routes/estudiante');
const docentes = require('./routes/docente');
const entidades = require('./routes/entidad');
const generacionalerta = require('./routes/generacionalerta');
const usuario = require('./routes/usuario')

// Ajustess 
app.set('port', 3000);//puerto único  //firewall

// middleware
app.use(express.json());
// ajustess
// defino middleware
app.use('/api/estudiantes',estudiantes);
app.use('/api/docentes',docentes);
app.use('/api/entidades',entidades);
app.use('/api/generacionreporte',generacionalerta);
app.use('/api/usuario',usuario);

//app.use('/api/modulos',modulos);
//app.use('/api/colegios',colegios);


app.listen(app.get('port'),()=>{
    console.log('listening on port' + app.get('port'));
});
