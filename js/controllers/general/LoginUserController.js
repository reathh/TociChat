tociChatApp.controller('LoginUserController', function ($scope, $location, userInteractions, userOperations) {
    $scope.loginUser = loginUser;

    function loginUser(user) {
        userOperations.login(user).then(function () {
            userInteractions.informUserTopCenter('success', "Login successful", 3);
            $location.path('/user/home')
        }, function (err) {
            userInteractions.informUserInCustomContainer('#noty-area', 'error', err.data, 2)
        })
    }
});