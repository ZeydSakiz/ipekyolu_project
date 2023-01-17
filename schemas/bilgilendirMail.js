const mongoose = require('mongoose');
const express= require('express');

const Schema = mongoose.Schema

const bilgiSchema = new Schema({
    name:{
        type: String,
    require: true
    },
    email:{
        type: String,
    require: true
    }

     }, {timestamps: true});

     const bilgiMail = mongoose.model('bilgiMail',bilgiSchema);

     exports.default = bilgiMail;