tociChatApp.controller('LoginUserController', function ($scope, $location, userInteractions, userOperations) {
    $scope.loginUser = loginUser;

    function loginUser(user, rememberUser) {
        userOperations.login(user, rememberUser);
    }
});