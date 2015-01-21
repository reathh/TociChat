tociChatUserApp.controller('NavigationController', function ($scope) {
    $scope.navItems = generateNavItems();

    function generateNavItems() {
        return [
            {
                name: 'My Profile',
                url: '#/user/profile'
            },
            {
                name: 'Chat',
                url: '#/user/chat'
            }
        ]
    }
});