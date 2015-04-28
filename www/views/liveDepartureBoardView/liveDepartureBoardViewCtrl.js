angular.module('TrainGetter.liveDepartureBoardViewCtrl', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/liveDepartureBoardView', {
        templateUrl: 'views/liveDepartureBoardView/liveDepartureBoardView.html',
        controller: 'LiveDepartureBoardViewCtrl'
    });
}])

.controller('LiveDepartureBoardViewCtrl', ['$scope', 'liveDepartureTimes',
    function($scope, $liveDepartureTimes) {
        console.log($liveDepartureTimes.query());
    }
]);