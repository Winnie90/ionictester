'use strict';

angular.module('TrainGetter.services.allStations',['ngResource'])

.factory('allStations', function($resource){
    return $resource(
        'static-data/station-codes.json', {},
        {'query': { method: 'GET', isArray:true}}
    );
});