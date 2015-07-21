module.exports.tasks = {
    /**
     * Uglify
     * https://github.com/gruntjs/grunt-contrib-uglify
     * Minifies and concatinates your JS
     * Also creates source maps
     */
    uglify: {
        options: {
            banner: '/*! <%= grunt.template.today("yyyy-mm-dd") %> */',
            mangle: true, // mangle: Turn on or off mangling
            beautify: false, // beautify: beautify your code for debugging/troubleshooting purposes
            compress: true,
            // report: 'gzip', // report: Show file size report
            sourceMap: true
        },
        js: {
            src: '<%=config.js.fileList%>',
            dest: '<%=config.js.distDir%>/<%=config.js.distFile%>'
        }
    },

    /**
     * Shimly
     * https://github.com/nicbell/Shimly
     * Create a JavaScript shim set
     */
    shimly: {
        shim: ['Function.bind', 'Object.assign'],
        dest: '<%=config.webroot%>/lib/shims.js',
        minify: false
    }
};