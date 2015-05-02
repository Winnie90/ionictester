'use strict';

angular.module('TrainGetter.services.liveDepartureTimes',['ngResource'])

.factory('liveDepartureTimes', function($resource, geoLocation, sharedProperties){
    return $resource(
            'http://transportapi.com/v3/uk/train/station/' +
                ''+sharedProperties.getFromStation().station_code +
                '/live.json?'+
                'api_key='+sharedProperties.getApiKey()+
                '&app_id='+sharedProperties.getAppId(),
            {},
            {'query': { method: 'GET', isArray:false}}
     );
});



