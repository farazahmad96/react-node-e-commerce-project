const express = require('express');
const { default: mongoose } = require('mongoose');

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
});

//model name should be table/collection name
module.exports = mongoose.model("users", userSchema);