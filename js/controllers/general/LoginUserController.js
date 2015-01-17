tociChatApp.controller('LoginUserController', function ($scope, $location, userInteractions, userOperations) {
    $scope.loginUser = loginUser;

    function loginUser(user) {
        userOperations.login(user);
    }
});