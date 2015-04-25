'use strict';

angular.module('TrainGetter.services.shared-properties', [])
.service('shared-properties', function () {
    var fromStation = null;
    var toStation = null;

    return {
        getFromStation: function () {
            return fromStation;
        },
        setFromStation: function(value) {
            fromStation = value;
        },
        getToStation: function () {
            return toStation;
        },
        setToStation: function(value) {
            toStation = value;
        }
    };
});