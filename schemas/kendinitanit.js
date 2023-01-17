const mongoose = require('mongoose');
const express= require('express');

const Schema = mongoose.Schema

const tanitim = new Schema({
    name:{
        type: String,
    require: true
    },
    email:{
        type: String,
    require: true
    },
    phone:{
        type:Number,
        require:true
    },
    message:{
        type:String,
        require:true
    }

     }, {timestamps: true});

     const taniti = mongoose.model('taniti',tanitim);

     exports.default = taniti;