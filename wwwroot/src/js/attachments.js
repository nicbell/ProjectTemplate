var Attach = require('attach.js');

var app = require('./app'),
    Sample = require('./sample');


// Add attachments
Attach.add('Sample', function (el) {
    el['Sample'] = el['Sample'] || new Sample(el);
});


// Add events to app
app.bind('contentLoaded', function () {
    Attach.run();
});

app.bind('contentUpdated', function () {
    Attach.run();
});