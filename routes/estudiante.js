const express = require('express');
const router = express.Router();
const mysqlConnection = require('../db/db');

//colocar los middlewares

router.get('/estudiantes',(req,res)=>{
    mysqlConnection.query('SELECT * FROM ESTUDIANTE ',(err,rows,fiels)=>{
    if(!err){
       res.json(rows); 
    }else{
    console.log(err);
    }
  });
});


//agregar estudiante nuevo

router.post('/nuevo-estudiante',(req,res)=>{
    const{Identificacion, NombreCompleto, FechaDeNacimiento, CorreoElectronico, Grado, Genero, Dirreccion, NombreAcudiente, TelefonoAcudiente}=req.body;

    let estudiante = [Identificacion, NombreCompleto, FechaDeNacimiento, CorreoElectronico, Grado, Genero, Dirreccion, NombreAcudiente, TelefonoAcudiente];

    let nuevoEstudiante = `INSERT INTO ESTUDIANTE (Identificacion, NombreCompleto, FechaDeNacimiento, CorreoElectronico, Grado, Genero, Dirreccion, NombreAcudiente, TelefonoAcudiente)VALUES(?,?,?,?,?,?,?,?,?)`;

    mysqlConnection.query(nuevoEstudiante,estudiante,(err,results,fields)=>{
        if(err){
            return console.error(err.message);
        }else{
            res.json({message:`entidad registrada exitosamente`});
        }
    });
}); 

//actualizar

router.put('/estudiantes/:Identificacion', (req, res) => {
    const { NombreCompleto, FechaDeNacimiento, CorreoElectronico, Grado, Genero, Dirreccion, NombreAcudiente, TelefonoAcudiente } = req.body;

    const { Identificacion } = req.params;

    mysqlConnection.query(`UPDATE ESTUDIANTE SET NombreCompleto = ?, FechaDeNacimiento = ?, CorreoElectronico = ?, Grado = ?, Genero = ?, Dirreccion = ?, NombreAcudiente = ?, TelefonoAcudiente = ? WHERE Identificacion = ?`,

        [ NombreCompleto, FechaDeNacimiento, CorreoElectronico, Grado, Genero, Dirreccion, NombreAcudiente, TelefonoAcudiente, Identificacion], (err, rows, fields) => {
            if (!err) {
                res.json({ status: `estudiante Actualizado` });
            } else {
                console.log(err);
            }
        });
});


//bucar estudiante
router.get('/estudiantes/:Identificacion',(req,res)=>{
    const {Identificacion} = req.params;
    mysqlConnection.query('SELECT * FROM ESTUDIANTE WHERE Identificacion =?', [Identificacion],(err,rows,fields)=>{
        if(!err){
            res.json(rows[0])
        }else{
            console.log(err);
        }
    })
})

//eliminar estudiantes
router.delete('/estudiantes/:Identificacion', (req,res) => {
    const {Identificacion} = req.params;
    mysqlConnection.query('DELETE FROM ESTUDIANTE WHERE Identificacion=?', [Identificacion], (err, rows, fields) =>{
        if(!err){
            res.json({ status:'estudiante eliminado'});
        }else{
            console.log(err);
        }
    });
});


module.exports = router;