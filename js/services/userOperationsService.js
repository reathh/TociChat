tociChatApp.factory('userOperations', function ($resource) {
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

    function loginUser(user, rememberUser) {
        return resource.loginUser(user, function (data) {
            saveUserToStorage(data, rememberUser);
        })
            .$promise;
    }

    function saveUserToStorage(user, rememberUser) {
        if (rememberUser) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            sessionStorage.setItem('user', JSON.stringify(user));
        }
    }
    return {
        register: registerUser,
        login: loginUser
    }
});