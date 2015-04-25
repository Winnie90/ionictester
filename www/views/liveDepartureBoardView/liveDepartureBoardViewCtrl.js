angular.module('TrainGetter.liveDepartureBoardCtrl', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/liveDepartureBoardView', {
        templateUrl: 'views/liveDepartureBoardView/liveDepartureBoardView.html',
        controller: 'LiveDepartureBoardViewCtrl'
    });
}])

.controller('LiveDepartureBoardViewCtrl', ['$scope',
    function($scope) {

    }
]);