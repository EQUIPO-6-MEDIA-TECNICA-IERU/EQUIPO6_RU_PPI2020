const express = require('express');
const router = express.Router();
const mysqlConnection = require('../db/db');

//colocar los middlewares

router.get('/entidades',(req,res)=>{
    mysqlConnection.query('SELECT * FROM ENTIDAD ',(err,rows,fiels)=>{
    if(!err){
       res.json(rows); 
    }else{
    console.log(err);
    }});
    })

//agregar estudiante nuevo

router.post('/nuevo-entidad',(req,res)=>{
    const{Codigo, Nombre, Telefono, Dirreccion}=req.body;

    let entidad = [Codigo, Nombre, Telefono, Dirreccion];

    let nuevoEntidad = `INSERT INTO ENTIDAD (Codigo, Nombre, Telefono, Dirreccion, CampoEspecialidad)VALUES(?,?,?,?,?)`;

    mysqlConnection.query(nuevoEntidad,entidad,(err,results,fields)=>{
        if(err){
            return console.error(err.message);
        }else{
            res.json({message:`estudiante registrado exitosamente`});
        }
    });
}); 

//actualizar

router.put('/entidades/:Codigo', (req, res) => {
    const { Nombre, Telefono, Dirreccion, CampoEspecialidad } = req.body;

    const { Codigo } = req.params;

    mysqlConnection.query(`UPDATE ENTIDAD SET Nombre = ?, Telefono = ?, Dirreccion = ?, CampoEspecialidad = ? WHERE Codigo = ?`,

        [ Nombre, Telefono, Dirreccion, CampoEspecialidad, Codigo], (err, rows, fields) => {
            if (!err) {
                res.json({ status: `entidad actualizada` });
            } else {
                console.log(err);
            }
        });
});

//bucar estudiante
router.get('/entidades/:Codigo',(req,res)=>{
    const {Codigo} = req.params;
    mysqlConnection.query('SELECT * FROM ENTIDAD WHERE Identificacion =?', [Codigo],(err,rows,fields)=>{
        if(!err){
            res.json(rows[0])
        }else{
            console.log(err);
        }
    })
})

module.exports = router;

