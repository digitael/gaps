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
    })