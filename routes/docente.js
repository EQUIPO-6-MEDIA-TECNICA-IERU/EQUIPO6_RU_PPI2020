const express = require('express');
const router = express.Router();
const mysqlConnection = require('../db/db');

router.get('/docentes',(req,res)=>{
    mysqlConnection.query('SELECT * FROM DOCENTE ',(err,rows,fiels)=>{
    if(!err){
       res.json(rows); 
    }else{
    console.log(err);
    }});
    })// fin


//agregar docente nuevo

router.post('/nuevo-docente',(req,res)=>{
    const{Identificacion, NombreCompleto, CorreoElectronico, TelefonoFijo, TelefonoCelular}=req.body;

    let docente = [Identificacion, NombreCompleto, CorreoElectronico, TelefonoFijo, TelefonoCelular];

    let nuevoDocente = `INSERT INTO DOCENTE (Identificacion, NombreCompleto, CorreoElectronico, TelefonoFijo, TelefonoCelular) VALUES(?,?,?,?,?)`;

    mysqlConnection.query(nuevoDocente,docente,(err,results,fields)=>{
        if(err){
            return console.error(err.message);
        }else{
            res.json({message:`docente registrado exitosamente`});
        }
    });
}); 

//actualizar docente

router.put('/docentes/:Identificacion', (req, res) => {
    const { NombreCompleto, CorreoElectronico, TelefonoFijo, TelefonoCelular } = req.body;

    const { Identificacion } = req.params;

    mysqlConnection.query(`UPDATE DOCENTE SET NombreCompleto, CorreoElectronico, TelefonoFijo, TelefonoCelular WHERE Identificacion=?`,

        [ NombreCompleto, CorreoElectronico, TelefonoFijo, TelefonoCelular, Identificacion ], (err, rows, fields) => {
            if (!err) {
                res.json({ status: `docente actualizado` });
            } else {
                console.log(err);
            }
        });
});

//bucar docente
router.get('/docentes/:Identificacion',(req,res)=>{
    const {Identificacion} = req.params;
    mysqlConnection.query('SELECT * FROM DOCENTE WHERE Identificacion =?', [Identificacion],(err,rows,fields)=>{
        if(!err){
            res.json(rows[0])
        }else{
            console.log(err);
        }
    })
}) 

//eliminar docente
router.delete('/docentes/:Identificacion', (req,res) => {
    const {Identificacion} = req.params;
    mysqlConnection.query('DELETE FROM DOCENTE WHERE Identificacion=?', [Identificacion], (err, rows, fields) =>{
        if(!err){
            res.json({ status:'docente eliminado'});
        }else{
            console.log(err);
        }
    });
});

module.exports = router;