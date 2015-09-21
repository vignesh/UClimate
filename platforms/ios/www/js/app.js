// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

    .state('app.movies', {
      url: '/movies',
      views: {
        'menuContent': {
          templateUrl: 'templates/movies.html',
          controller: 'MoviesCtrl'
        }
      }
    })

    .state('app.UCB', {
      url: '/UCB',
      views: {
        'menuContent': {
          templateUrl: 'templates/UCB.html',
          controller: 'MoviesCtrl'
        }
      }
    })

    .state('app.UCI', {
      url: '/UCI',
      views: {
        'menuContent': {
          templateUrl: 'templates/UCI.html',
          controller: 'MoviesCtrl'
        }
      }
    })

    .state('app.UCLA', {
      url: '/UCLA',
      views: {
        'menuContent': {
          templateUrl: 'templates/UCLA.html',
          controller: 'MoviesCtrl'
        }
      }
    })

    .state('app.UCM', {
      url: '/UCM',
      views: {
        'menuContent': {
          templateUrl: 'templates/UCM.html',
          controller: 'MoviesCtrl'
        }
      }
    })

    .state('app.UCR', {
      url: '/UCR',
      views: {
        'menuContent': {
          templateUrl: 'templates/UCR.html',
          controller: 'MoviesCtrl'
        }
      }
    })

    .state('app.UCSD', {
      url: '/UCSD',
      views: {
        'menuContent': {
          templateUrl: 'templates/UCSD.html',
          controller: 'MoviesCtrl'
        }
      }
    })

    .state('app.UCSF', {
      url: '/UCSF',
      views: {
        'menuContent': {
          templateUrl: 'templates/UCSF.html',
          controller: 'MoviesCtrl'
        }
      }
    })

    .state('app.UCSB', {
      url: '/UCSB',
      views: {
        'menuContent': {
          templateUrl: 'templates/UCSB.html',
          controller: 'MoviesCtrl'
        }
      }
    })

    .state('app.UCSC', {
      url: '/UCSC',
      views: {
        'menuContent': {
          templateUrl: 'templates/UCSC.html',
          controller: 'MoviesCtrl'
        }
      }
    })

  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/movies');
});
