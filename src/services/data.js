'use strict'

angular.module('CloudSight')
.service('dataService', function($http){
    this.getOperators = function(cb) {
        $http.get('/api/operators')
        .then(cb);
    }
})