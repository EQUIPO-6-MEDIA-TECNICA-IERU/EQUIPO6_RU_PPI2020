const express = require('express');
const router = express.Router();
const mysqlConnection = require('../db/db');

//colocar los middlewares

router.get('/usuario',(req,res)=>{
    mysqlConnection.query('SELECT * FROM USUARIO ',(err,rows,fiels)=>{
    if(!err){
       res.json(rows); 
    }else{
    console.log(err);
    }});
    })// fin

//agregar

router.post('/nuevo-usuario',(req,res)=>{
    const{IdUsuario, Nombre, apellido,ContraElectronico}=req.body;

    let usuario = [IdUsuario, Nombre, apellido,ContraElectronico];

    let nuevoUsuario = `INSERT INTO USUARIO (IdUsuario, Nombre, apellido,ContraElectronico)VALUES(?,?,?,?)`;

    mysqlConnection.query(nuevoUsuario,usuario,(err,results,fields)=>{
        if(err){
            return console.error(err.message);
        }else{
            res.json({message:`usuario registrado`});
        }
    });
}); 

//actualizar

router.put('/usuario/:IdUsuario', (req, res) => {
    const { Nombre, apellido,ContraElectronico } = req.body;

    const { IdUsuario } = req.params;
 
    mysqlConnection.query(`UPDATE USUARIO SET Nombre = ?, apellido = ?,ContraElectronico = ?  WHERE IdUsuario = ?`,

        [ Nombre, apellido,ContraElectronico,IdUsuario ], (err, rows, fields) => {
            if (!err) {
                res.json({ status: `usuario Actualizado` });
            } else {
                console.log(err);
            }
        });
});

//bucar 
router.get('/usuario/:IdUsuario',(req,res)=>{
    const {IdUsuario} = req.params;
    mysqlConnection.query('SELECT * FROM USUARIO WHERE IdUsuario =?', [IdUsuario],(err,rows,fields)=>{
        if(!err){
            res.json(rows[0])
        }else{
            console.log(err);
        }
    })
})

//eliminar
router.delete('/usuario/:IdUsuario', (req,res) => {
    const {Identificacion} = req.params;
    mysqlConnection.query('DELETE FROM USUARIO WHERE IdUsuario=?', [IdUsuario], (err, rows, fields) =>{
        if(!err){
            res.json({ status:'usuario eliminado'});
        }else{
            console.log(err);
        }
    });
});

module.exports = router;