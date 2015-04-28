'use strict';

angular.module('TrainGetter.services.geoLocation',[])

.factory('geoLocation', function ($localStorage) {
    return {
        setGeolocation: function (latitude, longitude) {
            var _position = {
                latitude: latitude,
                longitude: longitude
            };
            $localStorage.setObject('geoLocation', _position)
        },
        getGeolocation: function () {
            return {
                lat: $localStorage.getObject('geoLocation').latitude,
                lng: $localStorage.getObject('geoLocation').longitude
            }
        }
    }
});