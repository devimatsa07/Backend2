// This file defines the User model for the database.
// A model describes how data is stored.

const mongoose = require('mongoose'); // Mongoose for MongoDB

// Define the structure of a User document
const userSchema = new mongoose.Schema({
  username: { type: String, required: true }, // Username must be a string and is required
  password: { type: String, required: true }  // Password must be a string and is required
});

// Create and export the User model
module.exports = mongoose.model('User', userSchema);