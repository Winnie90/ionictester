'use strict';

angular.module('TrainGetter.stationFinderViewCtrl', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/stationFinderView/:getFrom', {
        templateUrl: 'views/stationFinderView/stationFinderView.html',
        controller: 'StationFinderViewCtrl'
    });
}])

.controller('StationFinderViewCtrl',
        ['$scope','shared-properties', 'all-stations', '$routeParams',
    function($scope, $sharedProperties, $stations, $routeParams) {
        $scope.stations = $stations.query();

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
    }
]);
