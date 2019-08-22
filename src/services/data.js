'use strict'

angular.module('CloudSight')
    .service('dataService', function ($http) {
        this.getOperators = function (cb) {
            $http.get('/api/operators')
                .then(cb);
        }
        this.getOperator = function (id, cb) {
            $http.get('/api/operators/' + id)
                .then(cb);
        }
        this.createOperator = function (data) {
            $http.post('/api/operators', data);
        }
        this.updateOperator = function (data) {
            $http.put('/api/operators/' + data._id, data);
        }
        this.deleteOperator = function (id) {
            $http.delete('/api/operators/' + id);
        }
    })