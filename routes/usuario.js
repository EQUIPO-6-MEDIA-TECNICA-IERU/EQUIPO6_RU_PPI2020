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

module.exports = router;