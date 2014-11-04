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

app.controller('ContentController', function($scope, $ionicSideMenuDelegate ){
    $scope.$selected = 0;
    $scope.toggleLeft = function(index) {
        $ionicSideMenuDelegate.toggleLeft();
        if(angular.isDefined(index)){
            $scope.$selected = index;
        }
    };
    $scope.items = [
        {label: "chi_siamo", anchor: "side_menu.html#/about?index=1"},
        {label: "settori", anchor: "side_menu.html#/settori?index=2"},
        {label: "servizi", anchor: "side_menu.html#/servizi?index=3"},
        {label: "download", anchor: "side_menu.html#/download?index=4"},
        {label: "notizie", anchor: "side_menu.html#/notizie?index=5"},
        {label: "contatti", anchor: "side_menu.html#/contatti?index=6"}
    ];
    
    $scope.$on('$routeChangeStart', function(event, next, current) {
        console.log(event, next, current);
        $scope.$selected = next.params.index;
    });
    
});

app.controller('aboutController', function($scope){
    $scope.message = "----";
    console.log('aboutController', $scope.message);
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
        controller: 'aboutController'
    });
    $routeProvider.when('/contatti', {
        templateUrl : 'pages/contatti.html',
        controller: 'aboutController'
    });
});
