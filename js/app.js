var tociChatApp = angular
    .module('tociChatApp', ['ngResource', 'ngRoute', 'ngMessages'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'templates/general/welcome-screen.html'
            })
            .when('/register', {
                templateUrl: 'templates/user/register.html'
            })
            .when('/login', {
                templateUrl: 'templates/user/login.html'
            })
            .when('/user/home', {
                templateUrl: 'templates/user/home.html'
            })

            .otherwise({
                redirectTo: '/'
            })
    });