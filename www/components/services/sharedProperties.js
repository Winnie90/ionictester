'use strict';

angular.module('TrainGetter.services.sharedProperties', [])
.service('sharedProperties', function ($localStorage) {
    var fromStation = null;
    var toStation = null;
    var apiKey = '1c7544540e3f2324cd3f0b4eaeb485ba';
    var appId = '42e503c6';

    return {
        getFromStation: function () {
            return $localStorage.getObject('fromStation');
        },
        setFromStation: function(value) {
            $localStorage.setObject('fromStation', value)
        },
        getToStation: function () {
            return $localStorage.getObject('toStation');
        },
        setToStation: function(value) {
            $localStorage.setObject('toStation', value)
        },
        getApiKey: function(){
            return apiKey;
        },
        getAppId: function(){
            return appId;
        }
    };
});