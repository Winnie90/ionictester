'use strict';

angular.module('TrainGetter.platformFinderViewCtrl', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/platformFinderView', {
        templateUrl: 'views/platformFinderView/platformFinderView.html',
        controller: 'PlatformFinderViewCtrl'
    });
}])

.controller('PlatformFinderViewCtrl', ['$scope','$http',
    function($scope, $http) {

    }
]);
