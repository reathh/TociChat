var mainApp = angular
    .module('mainApp', ['ngResource', 'ngRoute', 'tociLoginRegisterApp', 'tociChatUserApp', 'btford.socket-io'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'templates/general/welcome-screen.html'
            })
            .otherwise({
                redirectTo: '/'
            })
    })
    //.constant('baseUrlApi', 'http://tocichatnodejs-ivelinkirilov.rhcloud.com/');
    .constant('baseUrlApi', 'http://localhost:8080/');
