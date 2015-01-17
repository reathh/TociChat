var LoginRegisterApp = angular
    .module('LoginRegisterApp', ['ngResource', 'ngRoute', 'ngMessages'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/welcome', {
                templateUrl: 'templates/general/welcome-screen.html'
            })
            .when('/register', {
                templateUrl: 'templates/user/register.html'
            })
            .when('/login', {
                templateUrl: 'templates/user/login.html'
            })

            .otherwise({
                redirectTo: '/welcome'
            })
    });