const express = require('express'); 
const cors = require('cors'); 
const mongoose = require('mongoose'); 
const path = require('path');
const fileuploadingroute = require('./routes/fileuploadingroute');

const app = express(); 
app.use(cors()); 
app.use(express.json());
app.use(express.static(path.join(__dirname,"uploads"))) 
mongoose.connect('mongodb://localhost:27017/fullstack').then(() => {
    console.log('Connected to MongoDB'); 
}).catch((error) => {
    console.error('MongoDB connection error:', error); 
});

app.use('/', fileuploadingroute); 
app.listen(9001, () => {
    console.log('Server is running on port 9001');
});
