// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ngRoute'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
app.constant('Constant', {
    langITA: 'ITA',
    langENG: 'ENG',
    loadingTemplate: 'Loading...'
});






app.config(function($routeProvider) {
    $routeProvider.when('/about', {
        templateUrl : 'pages/chi_siamo.html',
        controller: 'aboutController'
    });
    $routeProvider.when('/settori', {
        templateUrl : 'pages/settori.html',
        controller: 'aboutController'
    });
    $routeProvider.when('/servizi', {
        templateUrl : 'pages/servizi.html',
        controller: 'aboutController'
    });
    $routeProvider.when('/download', {
        templateUrl : 'pages/download.html',
        controller: 'aboutController'
    });
    $routeProvider.when('/notizie', {
        templateUrl : 'pages/notizie.html',
        controller: 'newsController'
    });
    $routeProvider.when('/contatti', {
        templateUrl : 'pages/contatti.html',
        controller: 'aboutController'
    });


});
