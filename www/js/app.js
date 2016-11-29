
var app = angular.module('mexica', ['ionic', 'ionic-material']);

app.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {

        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }

        if (window.StatusBar) {
            StatusBar.styleDefault();
        }

    });
})

app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'MenuController'
    })

    .state('app.home', {
        url: '/home',
        views: {
            'tab-home': {
                templateUrl: 'templates/home.html',
                controller: 'HomeController'
            }
        }
    })
    
    .state('app.tours', {
        url: '/tours',
        views: {
            'tab-tours': {
                templateUrl: 'templates/tours.html',
                controller: 'ToursController'
            }
        }
    })

    .state('app.places', {
        url: '/places',
        views: {
            'tab-places': {
                templateUrl: 'templates/places.html',
                controller: 'PlacesController'
            }
        }
    })
    
    ;

    $urlRouterProvider.otherwise('/app/home');
});
