// This file has the controller functions that handle the API requests.
// Controllers do the main work for each route.

const express = require('express');
const User = require('../models/User'); // Import the User model

// Simple function to return a message
const getdata = (req, res) => {  
    return res.status(200).json('Data fetched successfully');
}

// Function to add a new user
const addUser = async (req, res) => {
    try {
        const { username, password } = req.body; // Get data from request
        const newUser = new User({ username, password }); // Create new user
        await newUser.save(); // Save to database
        res.status(201).json({ message: 'User added successfully', user: newUser }); // Send response
    } catch (error) {
        res.status(500).json({ error: error.message }); // Send error
    }
}

// Function to get all users
const getUsers = async (req, res) => {
    try {
        const users = await User.find(); // Find all users in database
        res.status(200).json(users); // Send them back
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Function to update a user
const updateUser = async (req, res) => {
    try {
        const { id } = req.params; // Get ID from URL
        const { username, password } = req.body; // Get new data
        const updatedUser = await User.findByIdAndUpdate(id, { username, password }, { new: true }); // Update in DB
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' }); // If not found
        }
        res.status(200).json({ message: 'User updated successfully', user: updatedUser }); // Success
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Function to delete a user
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params; // Get ID
        const deletedUser = await User.findByIdAndDelete(id); // Delete from DB
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' }); // Success
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Function to handle file upload
const UploadFile = (req, res) => {
    try {
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ message: 'No files uploaded' });
        }
        res.status(200).json({ message: 'Files uploaded successfully', files: req.files });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Export the functions so routes can use them
exports.getdata = getdata;
exports.addUser = addUser;
exports.getUsers = getUsers;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
exports.UploadFile = UploadFile;


