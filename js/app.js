angular.module('CollectiveApp', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'views/home.html'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'views/about.html'
            })
            .state('Portraits', {
                url: '/Portraits',
                templateUrl: 'views/Portraits.html'
            })
            .state('Gerald', {
                url: '/Gerald',
                templateUrl: 'views/Gerald.html'
            });
        $urlRouterProvider.otherwise('/home');
    });