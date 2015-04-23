'use strict';

angular.module('TrainGetter.platformListCtrl', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/platformListView', {
        templateUrl: 'platformListView/platformFinderView.html',
        controller: 'PlatformListCtrl'
    });
}])

.controller('PlatformListCtrl', ['$scope','$http',
    function($scope, $http) {
        $http.get('static-data/station-codes.json').success(function(data) {
            $scope.platforms = data;
        });
    }
]);
