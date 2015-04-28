'use strict';

angular.module('TrainGetter.services.liveDepartureTimes',['ngResource'])

.factory('liveDepartureTimes', function($resource, geoLocation, sharedProperties){
    var currentTime = new Date();
    console.log('http://transportapi.com/v3/uk/train/station/'+
            ''+sharedProperties.getFromStation().station_code +
            '/'+currentTime.getFullYear()+'-'+(currentTime.getMonth() + 1) + '-' + currentTime.getDate() +
            '/'+currentTime.getHours()+':'+currentTime.getMinutes()+
            '/timetable.json?'+
            'api_key='+sharedProperties.getApiKey()+
            '&app_id='+sharedProperties.getAppId());
    return $resource(
            'http://transportapi.com/v3/uk/train/station/'+
                ''+sharedProperties.getFromStation().station_code +
                '/'+currentTime.getFullYear()+'-'+(currentTime.getMonth() + 1) + '-' + currentTime.getDate() +
                '/'+currentTime.getHours()+':'+currentTime.getMinutes()+
                '/timetable.json?'+
                'api_key='+sharedProperties.getApiKey()+
                '&app_id='+sharedProperties.getAppId(),
            {},
            {'query': { method: 'GET', isArray:false}}
     );
});



