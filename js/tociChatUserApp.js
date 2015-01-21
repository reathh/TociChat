var tociChatUserApp = angular
    .module('tociChatUserApp', ['ngResource', 'ngRoute', 'ngMessages'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/user/chat', {
                templateUrl: 'templates/user/chat.html'
            })

    });