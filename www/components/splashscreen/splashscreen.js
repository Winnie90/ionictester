'use strict';

angular.module('TrainGetter.splashscreen', ['ngCordova'])
.run(function($cordovaSplashscreen) {
    setTimeout(function() {
        $cordovaSplashscreen.hide()
    }, 1000)
});
