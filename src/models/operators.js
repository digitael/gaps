'use strict'

var mongoose = require('mongoose');

var operatorSchema = new mongoose.Schema({
    name: String,
    network: Boolean,
    voice: Boolean,
    catv: Boolean,
    data: Boolean,
    activationData: { type: Date, default: Date.now }
});

var model = mongoose.model('Operator', operatorSchema);

module.exports = model;