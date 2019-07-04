'use strict'
angular.module('CloudSight', ['ngMaterial'])
    .directive('operators', function () {
        return {
            templateUrl: 'views/operators.html'
        };
    })
    .controller('operatorCtrl', function ($scope, dataService) {
        dataService.getOperators(function (response) {
            let operators = response.data;
            $scope.operators = operators;
        })
    })
    .controller('sidenavCtrl', function ($scope, $mdSidenav) {
        $scope.openLeftMenu = function () {
            $mdSidenav('left').toggle();
            $scope.sideToggle = true;
        };
        $scope.closeLeftMenu = function(){
            $mdSidenav('left').toggle();
            $scope.sideToggle = false;
        }
    });