angular.module('TrainGetter.alert', ['ionic'])

.controller('AlertCtrl',function($scope, $ionicPopup) {

    var confirmPopup = $ionicPopup.confirm({
        title: 'Found our app useful?',
        template: 'Please rate it on the app store'
    });
    confirmPopup.then(function(res) {
        if(res) {
            console.log('You are sure');
        } else {
            console.log('You are not sure');
        }
    });
});