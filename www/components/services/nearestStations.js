'use strict';

angular.module('TrainGetter.services.nearestStations',['ngResource'])

.factory('nearestStations', function($resource, geoLocation, sharedProperties){
        var loc = geoLocation.getGeolocation();
        return $resource(
            'http://transportapi.com/v3/uk/train/stations/near.json?'+
                'lon='+loc.lng+
                '&lat=' +loc.lat+
                '&api_key=' +sharedProperties.getApiKey()+
                '&app_id='+sharedProperties.getAppId(),
            {},
            {'query': { method: 'GET', isArray:false}}
        );
});