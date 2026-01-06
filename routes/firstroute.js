const express = require('express');
const route = express.Router()
const firstcontroller = require('../controllers/firstcontroller');
route.get('/get-data', firstcontroller.getdata);


module.exports = route;
