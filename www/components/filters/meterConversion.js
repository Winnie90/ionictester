'use strict';

angular.module('TrainGetter.filters.meterConversion', []).filter('meterConversion', function() {
    return function(input) {
        var km = input/1000;
        return km.toFixed(2)+"km";
    }
});