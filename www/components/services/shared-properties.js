'use strict';

angular.module('TrainGetter.services.shared-properties', [])
.service('shared-properties', function () {
    var fromStation = true;

    return {
        getFromStation: function () {
            return fromStation;
        },
        setFromStation: function(value) {
            fromStation = value;
        }
    };
});