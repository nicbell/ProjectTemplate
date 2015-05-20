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

            css: {
                distDir: 'assets/dist/css', // <%=config.css.distDir%>
                srcFile: 'app', // <%=config.css.srcFile%>
                scssDir: 'assets/src/scss' // <%=config.css.scssDir%>
            },

            js: {
                srcDir: 'assets/src/js',
                distDir: 'assets/dist/js', // <%=config.js.distDir%>
                distFile: 'app.min.js', // <%=config.js.distFile%>
                bowerDir: 'bower_components',

                // <%=config.js.fileList%>
                fileList: [
                    //Bower
                    //'<%=config.js.bowerDir%>/picturefill/dist/picturefill.js',
                    '<%=config.js.bowerDir%>/attach/attach.js',
                    '<%=config.js.bowerDir%>/klass/klass.js',
                    '<%=config.js.bowerDir%>/microevent/microevent.js',
                    //'<%=config.js.bowerDir%>/swipe-js/swipe.js',
                    //'<%=config.js.bowerDir%>/mustache.js/mustache.js',

                    //Shimly
                    '<%=config.js.srcDir%>/shims.js',

                    //App
                    '<%=config.js.srcDir%>/*.js'
                ]
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
        * grunt build   : run bower install, shimly, uglify, sass and autoprefixer
        * grunt         : run test and build
        * grunt release : run test, build and csso
        * grunt start   : run build and watch
       ========================================================================== */

    grunt.registerTask('test', ['jshint', 'jscs', 'scsslint'/*, 'photobox'*/]);
    grunt.registerTask('build', ['shimly', 'uglify', 'sass:dist', 'autoprefixer:dist']);

    grunt.registerTask('default', ['test', 'build']);
    grunt.registerTask('release', ['test', 'build', 'csso']);

    grunt.registerTask('start', ['build', 'watch']);
};