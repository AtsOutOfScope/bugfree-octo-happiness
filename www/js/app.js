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
        {label: "HOME", anchor: "index.html"},
        {label: "CHI SIAMO", anchor: "side_menu.html#/about?index=1"},
        {label: "SETTORI", anchor: "side_menu.html#/settori?index=2"},
        {label: "SERVIZI", anchor: "side_menu.html#/servizi?index=3"},
        {label: "DOWNLOAD", anchor: "side_menu.html#/download?index=4"},
        {label: "NOTIZIE", anchor: "side_menu.html#/notizie?index=5"},
        {label: "CONTATTI", anchor: "side_menu.html#/contatti?index=6"}
    ];
    $scope.notizie = [
        {data: "data1", text: "notizia1"},
        {data: "data2", text: "notizia2"}
    ];
               
    /* DocumentHandler */
    $scope.openPdf = function() {
               
        /*handleDocumentWithURL(
            function() {console.log('success');},
            function(error) {
            console.log('failure');
                if(error == 53) {
                    console.log('No app that handles this file type.');
                }
            },
            '6.pdf'
        );*/
        window.open('6.pdf');
    }
    
    
    $scope.$on('$routeChangeStart', function(event, next, current) {
        console.log(event, next, current);
	if(angular.isDefined(next) && angular.isDefined(next.params) && angular.isDefined(next.params.index)) {
        	$scope.$selected = next.params.index;
	}
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
//tabs routing
app.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "tabs.html"
    })

    // Each tab has its own nav history stack:

    .state('tab.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          templateUrl: 'pages/tab-info.html',
          controller: 'DashCtrl'
        }
      }
    })

    .state('tab.friends', {
      url: '/friends',
      views: {
        'tab-friends': {
          templateUrl: 'pages/tab-info.html',
          controller: 'FriendsCtrl'
        }
      }
    })
    .state('tab.friend-detail', {
      url: '/friend/:friendId',
      views: {
        'tab-friends': {
          templateUrl: 'pages/tab-info.html',
          controller: 'FriendDetailCtrl'
        }
      }
    })

    .state('tab.account', {
      url: '/account',
      views: {
        'tab-account': {
          templateUrl: 'pages/tab-info.html',
          controller: 'AccountCtrl'
        }
      }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});

});
