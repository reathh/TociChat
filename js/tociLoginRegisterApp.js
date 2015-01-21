var tociLoginRegisterApp = angular
    .module('tociLoginRegisterApp', ['ngResource', 'ngRoute', 'ngMessages'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'templates/general/welcome-screen.html'
            })
            .when('/register', {
                templateUrl: 'templates/general/register.html'
            })
            .when('/login', {
                templateUrl: 'templates/general/login.html'
            })

            .otherwise({
                redirectTo: '/'
            })
    });