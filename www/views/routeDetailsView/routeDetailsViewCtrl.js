'use strict';

angular.module('TrainGetter.routeDetailsViewCtrl', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/routeDetailsView', {
        templateUrl: 'views/routeDetailsView/routeDetailsView.html',
        controller: 'RouteDetailsViewCtrl'
    });
}])

.controller('RouteDetailsViewCtrl', ['$scope','$http',
    function($scope, $http) {

    }
]);
