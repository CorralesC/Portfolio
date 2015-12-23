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
            });
        $urlRouterProvider.otherwise('/home');
    });