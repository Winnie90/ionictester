'use strict';

angular.module('TrainGetter.routeDetailsViewCtrl', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/routeDetailsView', {
        templateUrl: 'views/routeDetailsView/routeDetailsView.html',
        controller: 'RouteDetailsViewCtrl'
    });
}])

.controller('RouteDetailsViewCtrl', ['$scope','routeDetails',
    function($scope, $routeDetails) {
        $scope.routeDetails = $routeDetails.query();
        console.log($scope.routeDetails);
    }
]);
