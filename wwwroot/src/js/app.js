/*
	Description: Main script file entry point, DOM ready ect
*/

var MicroEvent = require('microevent');

require('./modules/attachments');


// Global pub/sub
var app = {};
MicroEvent.mixin(app);

document.addEventListener('DOMContentLoaded', function () {
    app.trigger('contentLoaded');
});

module.exports = app;