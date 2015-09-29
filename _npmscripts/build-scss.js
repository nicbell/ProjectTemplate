// Requires.
var fs = require('fs');
var sass = require('node-sass');
var postcss = require('postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var config = require('../package').config;

// Compile sass.
function compile() {
	sass.render({
		file: config.scss.srcDir + config.scss.srcFile,
		outFile: config.scss.distDir + config.scss.distFile,
		outputStyle: 'compressed',
		precision: 10,
		sourceMap: true,
	}, function (err, result) {
		if (!err) {
			postCSS(result);
		}
		else {
			console.log(err);
		}
	});
}

// Auto Prefixer and CSS nano.
function postCSS(result) {
	var prefix = autoprefixer({ browsers: ['> 1%', 'IE 7'] }),
		nano = cssnano();

	postcss([prefix, nano]).process(result.css, {
		from: config.scss.distFile,
		to: config.scss.distFile,
		map: { inline: false }
	}).then(function (result) {
		fs.writeFile(config.scss.distDir + config.scss.distFile, result.css);
		fs.writeFile(config.scss.distDir + config.scss.sourceMap, result.map);
	});
}

// Commandline options.
if (process) {
	if (process.argv.indexOf('-c')) compile();
}

module.exports = {
	compile: compile
}