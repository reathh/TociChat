var tociChatUserApp = angular
    .module('tociChatUserApp', ['ngResource', 'ngRoute', 'ngMessages'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/user/chat', {
                templateUrl: 'templates/user/chat.html'
            })
            .when('/user/profile', {
                templateUrl: 'templates/user/profile.html'
            })
    }).factory('socket', function (socketFactory, baseUrlApi) {
        var myIoSocket = io.connect(baseUrlApi);
        var mySocket = socketFactory({
            ioSocket: myIoSocket
        });
        return mySocket;
    });