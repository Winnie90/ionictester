'use strict';

angular.module('TrainGetter.filters.delayedStatus', []).filter('delayedStatus', function() {
    return function(input) {
        if(input < 0){
            return "Early by "+input/60000+" minutes";
        } else if(input > 0){
            return "Delayed by "+input/60000+" minutes";
        } else {
            return "On time";
        }
    }
});