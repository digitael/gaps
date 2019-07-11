'use strict'

var Operators = require('./models/operators');
// let db = mongoose.connection;

// db.getSiblingDB('gaps');

// db.dropDatabase();

var name = ['KPN', 'Vodafone', 'T-Mobile', 'Ziggo', 'Tele2'];
var network = [true, true, true, true, true];
var voice = [true, true, true, false, false];
var catv = [true, false, true, false, false];
var data = [true, false, false, false, false];
var operatorsMock = [];

for (var i = 0; i < name.length; i++) {
    var operator = {
        name: name[i],
        network: network[i],
        voice: voice[i],
        catv: catv[i],
        data: data[i],
        activationDate: new Date()
    };
    operatorsMock.push(operator);
}

Operators.create(operatorsMock); // toevoegen operators in DB in de `operators` collection


// var operators = db.operators.find().toArray();

// var pakketten = ['Internet', 'Internet & TV', 'Glasvezel', 'Spotify Premium'];
// var omschrijving = "Dit is een pakket omschrijving";

// var abonnementenMock = [];

// // elk abonnement linken aan een willekeurige operator (vanuit random _id)

// for(var i = 0; i < pakketten.length; i++) {
//     var abonnement = {
//         pakket: pakketten[i],
//         omschrijving: omschrijving,
//         operator: operators[Math.floor(Math.random() * operators.length)]._id
//     }
//     abonnementenMock.push(abonnement);
// }

// abonnementen.insert(abonnementenMock);
