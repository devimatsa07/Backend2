const express = require('express');
const route = express.Router()
const firstcontroller = require('../controllers/firstcontroller');
route.get('/get-data', firstcontroller.getdata);
route.post('/add-user', firstcontroller.addUser);
route.get('/get-users', firstcontroller.getUsers);
route.put('/update-user/:id', firstcontroller.updateUser);
route.delete('/delete-user/:id', firstcontroller.deleteUser);

module.exports = route;
