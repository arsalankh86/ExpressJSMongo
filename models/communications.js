const mongoose = require('mongoose');

let communicationSchema =mongoose.Schema({
title:{
type: String,
require: true
},
name:{
type: String,
require: true
},
medium:{
type: String,
require: true
},

});

let communications = module.exports = mongoose.model('communications',communicationSchema);
