const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const firstroute = require('./routes/firstroute');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/fullstack').then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('MongoDB connection error:', error);
});

app.use('/', firstroute);

app.listen(9001, () => {
    console.log('Server is running on port 9001');
});
