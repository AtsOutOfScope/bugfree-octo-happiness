// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic','angular-carousel'])

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
    loadingTemplate: '<div class="ion-loading-c"></div>'
});



/* ui-router */

app.config(function($stateProvider, $urlRouterProvider) {
    // to go default state
    $urlRouterProvider.otherwise('/index');
    $stateProvider
    .state('index', {
        url: '/index',
        views: {
            'view1': {
                templateUrl: 'pages/home.html'
            }
        }
        
    })
    
    .state('menu', {
        url: '/menu',
        views: {
            'view1': {
                templateUrl:'pages/menu.html',
                controller: 'ContentController'
            }
        } 
    })
    .state('chisiamo', {
        url: '/chisiamo',
        views: {
            'view2@chisiamo': {
                templateUrl:'pages/chi_siamo.html',
                controller: 'aboutController'
            },
            'view1': {
                templateUrl:'pages/menu.html',
                controller: 'ContentController',
                data: {selected: 1}
            }
        } 
    })
    .state('settori', {
        url: '/settori',
        views: {
            'view2@settori': {
                templateUrl:'pages/settori.html',
		controller: 'settoriController'
            },
            'view1': {
                templateUrl:'pages/menu.html',
                controller: 'ContentController',
                data: {selected: 2}
            }
        } 
    })
    .state('servizi', {
        url: '/servizi',
        views: {
            'view2@servizi': {
                templateUrl:'pages/servizi.html',
		controller: 'serviziController'
            },
            'view1': {
                templateUrl:'pages/menu.html',
                controller: 'ContentController',
		controllerAs:'api',
                data: {selected: 3}
            }
        } 
    })
    .state('download', {
        url: '/download',
        views: {
            'view2@download': {
                templateUrl:'pages/download.html',
                controller: 'DownloadController'

            },
            'view1': {
                templateUrl:'pages/menu.html',
                controller: 'ContentController',
                controllerAs: 'api',
                data: {selected: 4}
            }
        } 
    })
    .state('notizie', {
        url: '/notizie',
        views: {
            'view2@notizie': {
                templateUrl:'pages/notizie.html',
                controller: 'newsController'
            },
            'view1': {
                templateUrl:'pages/menu.html',
                controller: 'ContentController',
                controllerAs: 'api',
                data: {selected: 5}
            }
        } 
    })
    .state('lastnews', {
        url: '/lastnews',
        views: {
            'view2@lastnews': {
                templateUrl:'pages/notizie.html',
                controller: 'newsController'
            },
            'view1': {
                templateUrl:'pages/menu.html',
                controller: 'ContentController',
                controllerAs: 'api',
                data: {selected: 5, lastNews: true}
            }
        } 
    })
    .state('contatti', {
        url: '/contatti',
        views: {
            'view2@contatti': {
                templateUrl:'pages/contatti.html'
            },
            'view1': {
                templateUrl:'pages/menu.html',
                controller: 'ContentController',
                data: {selected: 6}
            }
        } 
    })
	.state('gallery', {
        url: '/gallery',
        views: {
            'view2@gallery': {
                templateUrl:'pages/gallery.html',
		controller: 'galleryController'
            },
            'view1': {
                templateUrl:'pages/menu.html',
                controller: 'ContentController',
                data: {selected: 1}
            }
        } 
    })

.state('mappa', {
        url: '/mappa',
        views: {
            'view2@mappa': {
                templateUrl:'pages/mappa.html',
		controller: 'mappaController'
            },
            'view1': {
                templateUrl:'pages/menu.html',
                controller: 'ContentController',
                data: {selected: 6}
            }
        } 
    })

.state('galleryslide', {
        url: '/galleryslide',
        views: {
            'view2@galleryslide': {
                templateUrl:'pages/gallery_slidebox.html',
		controller: 'galleryController'
            },
            'view1': {
                templateUrl:'pages/menu.html',
                controller: 'ContentController',
                data: {selected: 1}
            }
        } 
    });
	

});

