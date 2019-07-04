'use strict'

var Operators = require('./models/operators')

var operators = [
    {
        "name": "KPN",
        "network": true,
        "voice": true,
        "catv": false,
        "data": true
    },
    {
        "name": "IOPSYS",
        "network": true,
        "voice": false,
        "catv": true,
        "data": false
    },
    {
        "name": "CHRIS-TEL",
        "network": true,
        "voice": true,
        "catv": false,
        "data": true
    },{
        "name": "ROEL-COM",
        "network": false,
        "voice": true,
        "catv": false,
        "data": false
    }

]

operators.forEach(function(operators, index){
    Operators.find({ 'name': operators.name }, function(err, operators){
        if(!err && !operators.length) {
            Operators.create({ name: operators.name});
        }
    });
});