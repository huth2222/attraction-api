const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

const app = express();

app.use(cors());

app.get('/helloworld',function(req,res,next){
    res.json({
        msg: 'helloworld'
    });
});

app.get('/attractions',function(req,res,next){
    pool.query("select * from attractions", function(err,rows,fields){
        res.json(rows);
    })
});

app.listen(5000,function(){
    console.log('web server on 5000');
})