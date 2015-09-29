// Requires.
var fs = require('fs');
var sass = require('node-sass');
var postcss = require('postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var webroot = require('../package').config.webroot;

//"build:scss": "node-sass --soure-map  wwwroot/src/scss/app.scss wwwroot/dist/css/app.css | postcss --use autoprefixer  wwwroot/dist/css/app.css",

var config = {
	src: webroot + '/src/scss/app.scss',
	dist: webroot + '/dist/css/app.css',
	map: webroot + '/dist/css/app.css.map'
}

// Compile sass.
function compileSass() {
	sass.render({
		file: config.src,
		outFile: config.dist,
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

// Auto Prefixer and Css nano.
function postCSS(result) {
	var prefix = autoprefixer({ browsers: ['> 1%', 'IE 7'] }),
		nano = cssnano();

	postcss([prefix, nano]).process(result.css, {
		from: 'app.css',
		to: 'app.css',
		map: { inline: false }
	}).then(function (result) {
		fs.writeFile(config.dist, result.css);
		fs.writeFile(config.map, result.map);
	});
}

compileSass();