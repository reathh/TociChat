tociChatApp.controller('UserHomeController', function ($scope, userOperations) {
    $scope.currentUser = userOperations.getLoggedInUser();
    $scope.logout = logout;


    function logout() {
        userOperations.logout();
    }

});