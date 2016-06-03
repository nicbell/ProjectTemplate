// Requires
var fs = require('fs');
var Browserify = require('browserify');
var config = require('../package').config;

// Compile JS
function compile() {
	var bundler = new Browserify({
		debug: true,
		fullPaths: false
	});

	bundler.add(config.js.srcDir + config.js.srcFile);
	bundler.transform('babelify', { presets: ['es2015'] });
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
	if (process.argv.indexOf('-c')) compile();
}


module.exports = {
	compile: compile
}