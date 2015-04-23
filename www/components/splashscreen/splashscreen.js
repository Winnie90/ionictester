'use strict';

angular.module('TrainGetter.splashscreen', ['ngCordova'])
.run(function($cordovaSplashscreen) {
    console.log($cordovaSplashscreen);
    setTimeout(function() {
        $cordovaSplashscreen.hide()
    }, 1000)
});
