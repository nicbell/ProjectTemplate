/// <vs AfterBuild='release' />
module.exports = function (grunt) {

    'use strict';

    var options = {
        pkg: require('./package'), // <%=pkg.name%>

        /**
         * Grunt global vars
         * Many of the Grunt tasks use these vars
         */
        config: {
            src: '_grunt-configs/*.js',
            webroot: 'wwwroot',

            css: {
                distDir: '<%=config.webroot%>/dist/css', // <%=config.css.distDir%>
                srcFile: 'app', // <%=config.css.srcFile%>
                scssDir: '<%=config.webroot%>/src/scss' // <%=config.css.scssDir%>
            },

            js: {
                entryFile: 'app.js', // <%=config.js.mainFile%>
                distDir: '<%=config.webroot%>/dist/js', // <%=config.js.distDir%>
                srcDir: '<%=config.webroot%>/src/js'
            }
        }
    };

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Load grunt configurations automatically
    var configs = require('load-grunt-configs')(grunt, options);

    // Define the configuration for all the tasks
    grunt.initConfig(configs);


    /* ==========================================================================
        Available tasks:

        * grunt test    : run jshint, jscs, scsslint and  photobox
        * grunt build   : run bower install, shimly, browserify, sass and autoprefixer
        * grunt         : run test and build
        * grunt release : run test, build and csso
        * grunt start   : run build and watch
       ========================================================================== */

    grunt.registerTask('test', ['jshint', 'jscs', 'scsslint'/*, 'photobox'*/]);
    grunt.registerTask('build', ['shimly', 'browserify', 'sass:dist', 'autoprefixer:dist']);

    grunt.registerTask('default', ['test', 'build']);
    grunt.registerTask('release', ['test', 'build', 'csso']);

    grunt.registerTask('start', ['build', 'watch']);
};