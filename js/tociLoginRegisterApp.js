var tociLoginRegisterApp = angular
    .module('tociLoginRegisterApp', ['ngResource', 'ngRoute', 'ngMessages'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/register', {
                templateUrl: 'templates/general/register.html'
            })
            .when('/login', {
                templateUrl: 'templates/general/login.html'
            })
    });