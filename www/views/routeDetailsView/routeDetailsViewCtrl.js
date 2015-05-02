'use strict';

angular.module('TrainGetter.routeDetailsViewCtrl', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/routeDetailsView/:service', {
        templateUrl: 'views/routeDetailsView/routeDetailsView.html',
        controller: 'RouteDetailsViewCtrl'
    });
}])

.controller('RouteDetailsViewCtrl', ['$scope','routeDetails', '$routeParams', 'sharedProperties',
    function($scope, $routeDetails, $routeParams, $sharedProperties) {
        var routeObject = $routeDetails.query({'service':$routeParams.service}, function(){
            $scope.routeDetails = routeObject.stops;
        });

        $scope.currentStation = function(station_code){
            if($sharedProperties.getFromStation().station_code == station_code){
                return "balanced";
            }
            return "";
        };
    }
]);
