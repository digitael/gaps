'use strict'

var Operators = require('./models/operators');

Operators.collection.deleteMany();

var operators = [
    {
        name: "KPN",
        network: true,
        voice: true,
        catv: true,
        data: true
    },
    {
        name: "Vodafone",
        network: true,
        voice: false,
        catv: true,
        data: false
    },
    {
        name: "T-Mobile",
        network: false,
        voice: true,
        catv: true,
        data: false
    },
];

operators.forEach(function(operator, index) {
    Operators.find({ 'name': operators.name }, function(err, operators){
        if(!err && !operators.length) {
            Operators.create({
                name: operator.name,
                network: operator.network,
                voice: operator.voice,
                catv: operator.catv,
                data: operator.data
            });
        }
    });
});