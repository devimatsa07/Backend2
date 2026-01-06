const express = require('express');
const cors=require('cors');
const firstroute= require('./routes/firstroute');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/',firstroute)

app.listen(9001,()=>{
    console.log('Server is running on port 9001');
});
