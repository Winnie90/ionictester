'use strict';

angular.module('TrainGetter.stationFinderViewCtrl', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/stationFinderView/:getFrom', {
        templateUrl: 'views/stationFinderView/stationFinderView.html',
        controller: 'StationFinderViewCtrl'
    });
}])

.controller('StationFinderViewCtrl',
        ['$scope','sharedProperties', 'allStations','$routeParams', 'geoLocation', 'nearestStations',
    function($scope, $sharedProperties, $allStations, $routeParams, geoLocation, $nearestStations) {
        $scope.stations = $allStations.query();
        var resultObject = $nearestStations.query({}, function(){
            $scope.nearestStations = resultObject.stations;
        });
        if($routeParams.getFrom == "from"){
            $scope.platformFinderTitle = "Where are you travelling from?";
        } else {
            $scope.platformFinderTitle = "Where are you travelling to?";
        }

        $scope.selectStation = function(station){
            if($routeParams.getFrom == "from"){
                $sharedProperties.setFromStation(station);
            } else {
                $sharedProperties.setToStation(station);
            }
        };

        //$scope.platformFinderTitle = geoLocation.getGeolocation();
    }
]);