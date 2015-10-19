// Requires.
var postscss = require('postscss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var config = require('../package').config;

// Compile sass.
function compile() {
	var prefix = autoprefixer({ browsers: ['> 1%', 'IE 7'] }),
		nano = cssnano();

	postscss([prefix, nano]).process({
		from: config.scss.srcDir + config.scss.srcFile,
		to: config.scss.distDir + config.scss.distFile
	});
}

// Commandline options.
if (process) {
	if (process.argv.indexOf('-c')) compile();
}

module.exports = {
	compile: compile
}