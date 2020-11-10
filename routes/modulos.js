const express = require('express'); //tabnine
const router = express.Router();
const mysqlConnection = require('../db/db');

// colocar los middleware

router.get('/',(req,res)=>{
    mysqlConnection.query('SELECT * FROM modulos', (err,rows,fields)=>{

        // si no hay error
        if(!err){
            res.json(rows);
        
        //si hay
        }else{
            console.log(err);
        }
    }) // fin de la conexión

    //buscar un modulo por su id

    router.get('/modulo/:id',(req,res)=>{
        const {id} = req.params; //id del modo númerico entero
        mysqlConnection.query('SELECT * FROM modulos WHERE id =?', [id],(err,rows,fields)=>{
            if(!err){
                res.json(rows[0])
            }else{
                console.log(err);
            }
        })
    }) // fin buscar un modulo

    //grabar un modulo

    router.post('/nuevo-modulo',(req,res)=>{
        const{modulo,modprefijo} = req.body; //captura
        let moduloArreglo = [modulo,modprefijo] //arreglo json

        //definir el scrip sql en una variable

        let nuevoModulo = 'INSERT INTO modulos(modulo,mod) value(?,?)'
        mysqlConnection.query(nuevoModulo,moduloArreglo,(err,results,fields)=>{
            //si hay errors
            if(!err){
                return console.err(err.message); //verdadero
            }else{
                res.json({message: 'modulo creado'}); //falso 
            } //finsi
        }) //fin guardar módulo

    })// fin guardar modulo

}) // fin de mostrar todos los modulos



module.exports = router;