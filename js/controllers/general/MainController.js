mainApp.controller('MainController', function ($scope, $location, userInteractions, userOperations) {
    $scope.$on('$locationChangeStart', function() {
        checkLocation($location.path());
    });

    function checkLocation(path) {
        if (path == '/login') {
            if (userOperations.isLoggedIn()) {
                userInteractions.informUserTopCenter('alert', 'You are already logged in', 2);
                $location.path('/')
            }
        }
        else if (path == '/register') {
            if (userOperations.isLoggedIn()) {
                userInteractions.informUserTopCenter('alert', 'You are already logged in', 2);
                $location.path('/')
            }
        }
        else if (path == '/') {
            if (userOperations.isLoggedIn()) {
                $location.path('/user/chat');
            }
        }
        else if (/\/user\/.*/.test(path)) {
            if (!userOperations.isLoggedIn()) {
                userInteractions.informUserTopCenter('alert', 'You must be logged in to see this page', 2);
                $location.path('/')
            } else {
                $scope.showUserModule = true;
            }
        }
        else if (!/\/user\/.*/.test(path)) {
            $scope.showUserModule = false;
        }
    }

});