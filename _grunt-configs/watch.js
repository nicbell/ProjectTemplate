module.exports.tasks = {
    /**
     * Watch
     * https://github.com/gruntjs/grunt-contrib-watch
     * Watches your scss, js etc for changes and compiles them
     */
    watch: {
        scss: {
            files: ['<%=config.css.scssDir%>/**/*.scss'],
            tasks: ['sass:dist', 'autoprefixer:dist']
        },

        js: {
            files: ['<%=config.js.fileList%>'],
            tasks: ['shimly', 'uglify']
        },

        grunt: {
            files: ['_grunt-configs/*.js', 'Gruntfile.js'],
            tasks: ['build', 'githooks']
        }
    }
};