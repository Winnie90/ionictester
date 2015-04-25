angular.module('TrainGetter.nextFastestViewCtrl', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/nextFastestView', {
        templateUrl: 'views/nextFastestView/nextFastestView.html',
        controller: 'NextFastestViewCtrl'
    });
}])

.controller('NextFastestViewCtrl', ['$scope',
    function($scope) {

    }
]);