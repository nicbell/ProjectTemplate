/*
	Description: Main script file entry point, DOM ready ect
*/

;(function (App) {

    //App obj handles events between classes
    MicroEvent.mixin(App);

    //Time to bind to DOM..
    App.bind('contentLoaded', function () { 
        Attach.run();
    });

    //Run attach after injecting content..
    App.bind('contentUpdated', function () {
        Attach.run();
    });

    document.addEventListener('DOMContentLoaded', function () {
        App.trigger('contentLoaded');
    });

})(window.App = window.App || {});