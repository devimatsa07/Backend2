const express = require('express');

const getdata=(req,res) => {  
    return res.status(200).json('Data fetched successfully');
}

exports.getdata = getdata;