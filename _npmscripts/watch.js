// Requires.
var gaze = require('gaze');
var config = require('../package').config;
var buildjs = require('./build-js');
var buildscss = require('./build-scss');

gaze(config.js.srcDir + '*', function (err, watcher) {	
	
	// On changed/added/deleted 
	this.on('all', function (event, filepath) {
		console.log(filepath + ' was ' + event);
		buildjs.compile();
	});

});

gaze(config.scss.srcDir + '*', function (err, watcher) {
	
	// On changed/added/deleted 
	this.on('all', function (event, filepath) {
		console.log(filepath + ' was ' + event);
		buildscss.compile();
	});

});