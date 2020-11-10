const express = require('express');
const router = express.Router();
const mysqlConnection = require('../db/db');

router.get('/entidades',(req,res)=>{
    mysqlConnection.query('SELECT * FROM ENTIDAD ',(err,rows,fiels)=>{
    if(!err){
       res.json(rows); 
    }else{
    console.log(err);
    }});
    })// fin

module.exports = router;

//colocar los middlewares