angular.module('TrainGetter.journeyViewCtrl', ['ionic', 'ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/journeyView', {
        templateUrl: 'views/journeyView/journeyView.html',
        controller: 'JourneyViewCtrl'
    });
}])

.controller('JourneyViewCtrl', ['$scope','shared-properties',
    function($scope, $sharedProperties) {
        $scope.fromStation = $sharedProperties.getFromStation();
        $scope.toStation = $sharedProperties.getToStation();
    }
]);