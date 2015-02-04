mainApp.factory('userOperations', function ($rootScope, $resource, baseUrlApi) {
    var resource = $resource('', {}, {
        registerUser: {
            method: 'POST',
            url: baseUrlApi + 'register'
        },
        loginUser: {
            method: 'POST',
            url: baseUrlApi + 'login'
        }
    });

    function registerUser(user) {
        return resource.registerUser(user, function (data) {
            saveUserToStorage(data, false);
        })
            .$promise;
    }

    function loginUser(user) {
        return resource.loginUser(user, function (data) {
            saveUserToStorage(data, user.rememberUser);
        })
            .$promise;
    }

    function saveUserToStorage(user, rememberUser) {
        localStorage.clear();
        sessionStorage.clear();

        if (rememberUser) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            sessionStorage.setItem('user', JSON.stringify(user));
        }
    }

    function isUserLoggedIn() {
        return localStorage.getItem('user') != null || sessionStorage.getItem('user') != null;
    }

    function getLoggedInUser() {
        var user = localStorage.getItem('user') || sessionStorage.getItem('user');
        return JSON.parse(user);
    }

    function logout() {
        localStorage.clear();
        sessionStorage.clear();
        $rootScope.$broadcast('loggedOut');
    }

    function getUsers(searchCriteria) {
        var searchCriteriaUrl = searchCriteria ? "?searchCriteria=" + searchCriteria : "";
        var url = baseUrlApi + 'users' + searchCriteriaUrl;
        var getUsersResource = $resource('', {}, {
            getUsers: {
                headers: {
                    'sessionKey': getLoggedInUser().sessionKey
                },
                method: "GET",
                url: url,
                isArray: true
            }
        });
        return getUsersResource.getUsers();
    }
    return {
        register: registerUser,
        login: loginUser,
        isLoggedIn: isUserLoggedIn,
        getLoggedInUser: getLoggedInUser,
        logout: logout,
        getUsers: getUsers
    }
});