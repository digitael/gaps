'use strict'
angular.module('CloudSight', ['ngRoute', 'ngMaterial'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/operators', {
                templateUrl: 'views/operators/operators.html'
            })
            .when('/operators/add', {
                templateUrl: 'views/operators/add.html'
            })
            .when('/operators/:id', {
                templateUrl: 'views/operators/add.html'
            })
            .when('/users', {
                templateUrl: 'views/users.html'
            })
            .when('/groups', {
                templateUrl: 'views/groups.html'
            })
            .otherwise({
                redirectTo: '/'
            })
        $locationProvider.hashPrefix('');
    })
    .directive('operators', function () {
        return {
            templateUrl: 'views/operators.html'
        };
    })
    .controller('operatorCtrl', function ($scope, dataService) {
        dataService.getOperators(function (response) {
            let operators = response.data;
            $scope.operators = operators.operators;
        })

        $scope.refresh = function() {
            dataService.getOperators(function (response) {
                let operators = response.data;
                $scope.operators = operators.operators;
            })
    }
})
    .controller('addOperatorCtrl', function($scope, $route, $routeParams, $location, dataService){
        $scope.$route = $route;
        $scope.$routeParams = $routeParams;

        if ($routeParams.id) {
            dataService.getOperator($routeParams.id, function(response){
                $scope.operator = response.data.operator[0];
            });
        }

        $scope.newOperator = function(data){
            dataService.createOperator(data);
            $location.path('/operators');
        }

    })
    .controller('sidenavCtrl', function ($scope, $mdSidenav) {
        $scope.openLeftMenu = function () {
            $mdSidenav('left').toggle();
            $scope.sideToggle = true;
        };
        $scope.closeLeftMenu = function () {
            $mdSidenav('left').toggle();
            $scope.sideToggle = false;
        }
        $scope.isOpenLeft = function(){
            return $mdSidenav('left').isOpen();
        }
    });