// This file defines the routes for the API.
// Routes tell the server what to do for different URLs.

const express = require('express');
const route = express.Router() // Create a router
const firstcontroller = require('../controllers/firstcontroller'); // Import the controller functions

// Routes for different actions
route.get('/get-data', firstcontroller.getdata); // GET request to get some data
route.post('/add-user', firstcontroller.addUser); // POST to add a new user
route.get('/get-users', firstcontroller.getUsers); // GET to get all users
route.put('/update-user/:id', firstcontroller.updateUser); // PUT to update a user by ID
route.delete('/delete-user/:id', firstcontroller.deleteUser); // DELETE to remove a user by ID

module.exports = route; // Export the router
