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
    langITA: 'ita',
    langENG: 'eng',
    loadingTemplate: 'Loading...'
});
app.controller('ContentController', function($scope, $ionicSideMenuDelegate, News, Constant){
    $scope.lang_ita = Constant.langITA;
    $scope.lang_eng = Constant.langENG;
    $scope.lang = Constant.langITA;
	$scope.langu = "ITA";
    $scope.$selected = 0;
    $scope.toggleLeft = function(index) {
        $ionicSideMenuDelegate.toggleLeft();
        if(angular.isDefined(index)){
            $scope.$selected = index;
        }
    };
    $scope.items = [
        {label: "HOME", anchor: "index.html"},
        {label: "CHI SIAMO", anchor: "side_menu.html#/about?index=1"},
        {label: "SETTORI", anchor: "side_menu.html#/settori?index=2"},
        {label: "SERVIZI", anchor: "side_menu.html#/servizi?index=3"},
        {label: "DOWNLOAD", anchor: "side_menu.html#/download?index=4"},
        {label: "NOTIZIE", anchor: "side_menu.html#/notizie?index=5"},
        {label: "CONTATTI", anchor: "side_menu.html#/contatti?index=6"}
    ];
    

    $scope.changeLang = function() {
		if($scope.langu == "ITA"){
			$scope.langu = "ENG";
		}else{
			$scope.langu = "ITA";
		}
    }
               
    /* DocumentHandler */
    $scope.openPdf = function() {
        //$scope.cordova = window.cordova;
        handleDocumentWithURL(
            function() {
                $scope.success = "success";
                console.log('success');
            },
            function(error) {
            console.log('failure');
                $scope.error = "error" + error;
                if(error == 53) {
                    console.log('No app that handles this file type.');
                }
            },
            'http://www.repstatic.it/content/nazionale/img/2014/11/10/100921380-3773a7d0-495c-4238-a5b5-707794d2f95f.jpg'
        );
        //window.open('https://drive.google.com/open?id=0B-5YgTPghahqMEdSTm9TZGx4LVE&authuser=0');
        //http://www.cheat-sheets.org/saved-copy/fwunixref.pdf
    }
    
    
    $scope.$on('$routeChangeStart', function(event, next, current) {
        console.log(event, next, current);
	if(angular.isDefined(next) && angular.isDefined(next.params) && angular.isDefined(next.params.index)) {
        	$scope.$selected = next.params.index;
	}
    });
    
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
