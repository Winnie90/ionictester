'use strict';

angular.module('TrainGetter.services.routeDetails',['ngResource'])

.factory('routeDetails', function($resource, sharedProperties){
    return $resource(
        'http://transportapi.com/v3/uk/train/service/:service' +
            '/timetable.json?'+
            'api_key='+sharedProperties.getApiKey()+
            '&app_id='+sharedProperties.getAppId(),
        {},
        {'query': { method: 'GET', params:{service:'service'}, isArray:false}}
    );
});
