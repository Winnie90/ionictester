'use strict';

angular.module('TrainGetter.services.routeDetails',['ngResource'])

.factory('routeDetails', function($resource, sharedProperties){
        console.log('http://transportapi.com/v3/uk/train/service/' +
            sharedProperties.getDeparture().service_id +
            '/live.json?'+
            'api_key='+sharedProperties.getApiKey()+
            '&app_id='+sharedProperties.getAppId());
    return $resource(
        'http://transportapi.com/v3/uk/train/service/' +
            sharedProperties.getDeparture().service_id +
            '/live.json?'+
            'api_key='+sharedProperties.getApiKey()+
            '&app_id='+sharedProperties.getAppId(),
        {},
        {'query': { method: 'GET', isArray:false}}
    );
});
