'use strict';

angular.module('TrainGetter.services.all-stations',['ngResource'])

.factory('all-stations', function($resource){
    return $resource(
        'static-data/station-codes.json', {},
        {'query': { method: 'GET', isArray:true}}
    );
});