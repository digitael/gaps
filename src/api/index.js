'use strict'

const express = require('express'),
    router = express.Router();

let Operators = require('../models/operators');
// let operators = require('../../mock/operators.json');

router.get('/operators', function (req, res) {
    Operators.find({}, function(err, operators){
        if(err) {
            return res.status(500).json({message: err.message});
        }
        res.json({operators: operators});
    });
});

module.exports = router;