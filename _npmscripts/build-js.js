// Requires
var fs = require('fs');
var shimly = require('shimly')
var Browserify = require('browserify');
var config = require('../package').config;

// Create shims
function shim() {
	shimly.shim(config.js.shims, true, config.js.distDir + config.js.shimFile);
}

// Compile JS
function compile() {
	var bundler = new Browserify({
		debug: true,
		fullPaths: false
	});

	bundler.add(config.js.srcDir + config.js.srcFile);
	bundler.plugin('minifyify', { map: config.js.sourceMap });

	bundler.bundle(function (err, src, map) {
		if (!err) {
			fs.writeFile(config.js.distDir + config.js.srcFile, src);
			fs.writeFile(config.js.distDir + config.js.sourceMap, map);
		}
		else {
			console.log(err);
		}
	});
}

// Commandline options.
if (process) {
	if (process.argv.indexOf('-s')) shim();
	if (process.argv.indexOf('-c')) compile();
}


module.exports = {
	shim: shim,
	compile: compile
}