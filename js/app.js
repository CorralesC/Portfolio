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
            });
        $urlRouterProvider.otherwise('/home');
    });