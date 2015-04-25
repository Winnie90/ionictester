angular.module('TrainGetter.journeyViewCtrl', ['ionic', 'ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/journeyView', {
        templateUrl: 'views/journeyView/journeyView.html',
        controller: 'JourneyViewCtrl'
    });
}])

.controller('JourneyViewCtrl', ['shared-properties',
    function($scope, $sharedProperties) {


    }
]);
