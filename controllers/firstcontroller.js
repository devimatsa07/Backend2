const express = require('express');
const app = express();

app.get('/get-data',(req,res)=>{
    console.log('Responding...');
});

app.use('/',require('./firstroute'));