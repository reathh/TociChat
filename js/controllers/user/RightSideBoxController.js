tociChatUserApp.controller("RightSideBoxController", function ($scope, userOperations, userInteractions, socket) {
    changeToWhoIsActive();
    $scope.changeToWhoIsActive = changeToWhoIsActive;
    $scope.changeToFriends = changeToFriends;
    $scope.searchUsers = searchUsers;

    function changeToWhoIsActive() {
        $scope.noUsersMessage = "There are no users at the moment";
        $scope.users = [
            //{
            //    id: 1,
            //    username: "HardCode",
            //    fullName: "Test Testov"
            //}
        ]
    }

    function searchUsers(searchCriteria) {
        $scope.users = userOperations.getUsers(searchCriteria)
    }

    function changeToFriends() {
        $scope.noUsersMessage = "You have no friends";
        $scope.users = [
            //{
            //    id: 1,
            //    username: "HardCode",
            //    fullName: "Test Testov"
            //}
        ]
    }
    socket.on('message', function (message) {
        userInteractions.informUserTopCenter('alert', message, 2);
    })
});