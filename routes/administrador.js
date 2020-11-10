const express = require('express');
const router = express.Router();
const mysqlConnection = require('../db/db');

//colocar los middlewares

router.get('/administradores',(req,res)=>{
    mysqlConnection.query('SELECT * FROM ADMINISTRADOR ',(err,rows,fiels)=>{
    if(!err){
       res.json(rows); 
    }else{
    console.log(err);
    }});
    })// fin

module.exports = router;