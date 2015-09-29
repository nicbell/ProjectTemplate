// Requires
var fs = require('fs');
var shimly = require('shimly')
var Browserify = require('browserify');
var webroot = require('../package').config.webroot;

//shimly -m -o wwwroot/dist/js/shims.js -s Object.assign,Function.bind
//browserify -d -p [minifyify --map app.map.json --output wwwroot/dist/js/app.map.json] wwwroot/src/js/app.js > wwwroot/dist/js/app.js

var config = {
	srcDir: webroot + '/src/js/',
	distDir: webroot + '/dist/js/',
	entryFile: 'app.js',
	sourceMap: 'app.map.json',
	shims: ['Array.every', 'Array.forEach'],
	shimFile: 'shims.js'
};

// Compile JS
function compileJS() {
	var bundler = new Browserify({
		debug: true,
		fullPaths: false
	});

	bundler.add(config.srcDir + config.entryFile);
	bundler.plugin('minifyify', { map: config.sourceMap });

	bundler.bundle(function (err, src, map) {
		if (!err) {
			fs.writeFile(config.distDir + config.entryFile, src);
			fs.writeFile(config.distDir + config.sourceMap, map);
		}
		else {
			console.log(err);
		}
	});
}


// Create shims
function shim() {
	shimly.shim(config.shims, true, config.distDir + config.shimFile);
}

shim();
compileJS();