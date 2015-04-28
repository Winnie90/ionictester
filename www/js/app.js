// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('TrainGetter', ['ionic', 'ngCordova','ngRoute',
        'TrainGetter.splashscreen',
        'TrainGetter.services',
        'TrainGetter.filters',
        'TrainGetter.journeyViewCtrl',
        'TrainGetter.stationFinderViewCtrl',
        'TrainGetter.nextFastestViewCtrl',
        'TrainGetter.liveDepartureBoardViewCtrl',
        'TrainGetter.routeDetailsViewCtrl'
    ])

.run(function($ionicPlatform, $cordovaGeolocation, geoLocation) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    $cordovaGeolocation
      .getCurrentPosition()
      .then(function (position) {
          geoLocation.setGeolocation(position.coords.latitude, position.coords.longitude)
      }, function (err) {
          //geoLocation.setGeolocation(54, -122.09)
      });
  });
})
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/stationFinderView/from'});
}]);
