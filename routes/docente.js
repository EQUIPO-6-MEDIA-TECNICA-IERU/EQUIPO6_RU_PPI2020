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

module.exports = router;