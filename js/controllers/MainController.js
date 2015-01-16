tociChatApp.controller('MainController', function ($scope, $resource) {
    var resource = $resource('http://ivelinkirilov.com/Projects/Toci/API/register', {}, {
        post: {
            method: 'POST'
        }
    });
    resource.post({username: 7}, function (data) {
        console.log(data);
    });
});