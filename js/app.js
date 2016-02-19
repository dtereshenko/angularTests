angular.module('myApp', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('internal');

        $stateProvider
            .state('internal', {
                url: '/internal-fox',
                templateUrl: 'partials/internal.html'
            })
            .state('crime-history', {
                url: '/crime-marketing',
                templateUrl: 'partials/crime-history.html'
            })
            .state('libertadores', {
                url: '/libertadores-marketing',
                templateUrl: 'partials/libertadores.html'
            });

        $locationProvider.html5Mode(true);
    }]);
