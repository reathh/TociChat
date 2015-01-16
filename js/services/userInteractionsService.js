tociChatApp.factory('userInteractions', function () {
    function notyInCustomContainer(container, type, text, timeInSeconds) {

        // Position:
        // ('top');
        // ('topCenter');
        // ('topLeft');
        // ('topRight');
        // ('center');
        // ('centerLeft');
        // ('centerRight');
        // ('bottom');
        // ('bottomCenter');
        // ('bottomLeft');
        // ('bottomRight');

        // Type:
        // ('alert');
        // ('information');
        // ('error');
        // ('warning');
        // ('notification');
        // ('success');

        var n = jQuery(container).noty({
            text: text,
            type: type,
            dismissQueue: true,
            layout: 'center',
            theme: 'defaultTheme',
            timeout: timeInSeconds * 1000
        });
    }

    function notyTopCenter(type, text, timeInSeconds) {
        var n = noty({
            text        : text,
            type        : type,
            dismissQueue: true,
            layout      : 'topCenter',
            theme       : 'defaultTheme',
            timeout: timeInSeconds * 1000
        });
    }

    function notyConfirm(text, successFunction, cancelFunction) {
        var n = noty({
            text: text,
            type: 'confirm',
            dismissQueue: false,
            layout: 'center',
            theme: 'defaultTheme',
            buttons: [
                {addClass: 'btn btn-primary', text: 'Ok', onClick: function($noty) {
                    if (successFunction) {
                        successFunction();
                    }
                    $noty.close();
                }
                },
                {addClass: 'btn btn-danger', text: 'Cancel', onClick: function($noty) {
                    if (cancelFunction) {
                        cancelFunction()
                    }
                    $noty.close();
                }
                }
            ]


        })

    }

    return {
        informUserTopCenter: notyTopCenter,
        informUserInCustomContainer: notyInCustomContainer,
        askUserForConfirmation: notyConfirm
    }
});