'use strict'

const express = require('express'),
    router = express.Router();

let Operators = require('../models/operators');
// let operators = require('../../mock/operators.json');

router.get('/operators', function (req, res) {
    Operators.find({}, function (err, operators) {
        if (err) {
            return res.status(500).json({
                message: err.message
            });
        }
        res.json({
            operators: operators
        });
    });
});

router.get('/operators/:id', function (req, res) {
    Operators.find({ _id: req.params.id }, function (err, operator) {
        if (err) {
            return res.status(500).json({
                message: err.message
            });
        }
        res.json({
            operator: operator
        });
    });
});

router.put('/operators/:id', function (req, res) {
    
    let id = req.params.id;
    let operator = req.body;
    console.log(operator, id);
        if(operator && operator._id !== id){
        return res.status(500).json({message: 'IDs matchen niet'});
    }

    Operators.findByIdAndUpdate( id, operator , {new: true}, function (err, operator) {
        if (err) {
            return res.status(500).json({
                message: err.message
            });
        }
        res.json({
            operator: operator
        });
    });
});

router.post('/operators', function (req, res) { 
    Operators.create(req.body, function (err) {
        if (err) {
            return res.status(500).json({
                message: err.message
            });
        }
        res.json( { operators: req.body, message: "Item created" });
    })
})

router.delete('/operators/:id', function (req, res) {
    
    let id = req.params.id;
    // let operator = req.body;
    // console.log(operator, id);
    //     if(operator && operator._id !== id){
    //     return res.status(500).json({message: 'IDs matchen niet'});
    // }

    Operators.findOneAndDelete( id, function (err) {
        if (err) {
            return res.status(500).json({
                message: err.message
            });
        }
        res.json({
            message: 'operator verwijderd'
        });
    });
});

module.exports = router;