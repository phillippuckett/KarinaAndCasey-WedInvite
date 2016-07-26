var kcWedding = angular.module('kcWedding', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: '/html/home.html',
                controller: 'homeCtrl'
            })

        $stateProvider
            .state('about', {
                url: '/about',
                templateUrl: '/html/about.html',
                controller: 'aboutCtrl'
            })

        $stateProvider
            .state('photo', {
                url: '/photo',
                templateUrl: '/html/photo.html',
                controller: 'photoCtrl'
            })

        $stateProvider
            .state('registry', {
                url: '/registry',
                templateUrl: '/html/registry.html',
                controller: 'registryCtrl'
            })

        $urlRouterProvider.otherwise('/home');
    });