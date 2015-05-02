angular.module('TrainGetter.liveDepartureBoardViewCtrl', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/liveDepartureBoardView', {
        templateUrl: 'views/liveDepartureBoardView/liveDepartureBoardView.html',
        controller: 'LiveDepartureBoardViewCtrl'
    });
}])

.controller('LiveDepartureBoardViewCtrl', ['$scope', '$interval', 'liveDepartureTimes', 'sharedProperties',
    function($scope, $interval, $liveDepartureTimes, $sharedProperties) {
        $scope.fromStation = $sharedProperties.getFromStation();
        $scope.departures = [];

        var refreshData = function() {
            departureObject = $liveDepartureTimes.query({}, function(){
                angular.forEach(departureObject.departures.all, function(value, key){
                    $scope.departures[key] = value;
                    console.log(value);
                    var parsedExpectedArrivalTime = Date.parse('1970-01-01T'+value.expected_arrival_time+':00');
                    var parsedAimedArrivalTime = Date.parse('1970-01-01T'+value.aimed_arrival_time+':00');
                    $scope.departures[key].delayed = parsedExpectedArrivalTime - parsedAimedArrivalTime;
                });
            });
        };

        $scope.status = function(status){
            return status!="STARTS HERE" && status!="CANCELLED";
        };

        $scope.goodStatus = function(status){
            if(status!="CANCELLED"){
                return "balanced";
            }
            return "delayed";
        };

        $scope.onTime = function(input){
            if(input > 0){
                return "delayed";
            }
            return "balanced";
        };

        refreshData();
        $interval(refreshData, 60000);
    }
]);