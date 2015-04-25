angular.module('TrainGetter.journeyViewCtrl', ['ionic', 'ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/journeyView', {
        templateUrl: 'views/journeyView/journeyView.html',
        controller: 'JourneyViewCtrl'
    });
}])

.controller('JourneyViewCtrl',
    function($scope, $ionicPopup) {
        var confirmPopup = $ionicPopup.confirm({
            title: 'Found our app useful?',
            template: 'Please rate it on the app store'
        });
        confirmPopup.then(function(res) {
            if(res) {
                console.log('You are sure');
            } else {
                console.log('You are not sure');
            }
        });
    }
);
