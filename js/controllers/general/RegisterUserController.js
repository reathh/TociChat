tociChatApp.controller('RegisterUserController', function ($scope, $location, userInteractions, userOperations) {
    $scope.registerUser = registerUser;

    function registerUser(user) {
        userOperations.register(user).then(function (data) {
            userInteractions.informUserTopCenter('success', "Registration successful, you're now logged in", 3);
            $location.path('/user/home')
        }, function (err) {
            userInteractions.informUserInCustomContainer('#noty-area', 'error', err.data, 2)
        })
    }
});