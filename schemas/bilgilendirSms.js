const mongoose = require('mongoose');
const express= require('express');

const Schema = mongoose.Schema

const bilgiSchema2 = new Schema({
    name:{
        type: String,
    require: true
    },
    telephone:{
        type: Number,
    require: true
    }

     }, {timestamps: true});

     const bilgiSms = mongoose.model('bilgiSms',bilgiSchema2);

     exports.default = bilgiSms;