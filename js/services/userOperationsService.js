mainApp.factory('userOperations', function ($resource) {
    var resource = $resource('', {}, {
        registerUser: {
            method: 'POST',
            url: 'http://ivelinkirilov.com/Projects/TociChat/API/register'
        },
        loginUser: {
            method: 'POST',
            url: 'http://ivelinkirilov.com/Projects/TociChat/API/login'
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
    }
    return {
        register: registerUser,
        login: loginUser,
        isLoggedIn: isUserLoggedIn,
        getLoggedInUser: getLoggedInUser,
        logout: logout
    }
});