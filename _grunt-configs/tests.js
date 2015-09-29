module.exports.tasks = {
    /**
	 * JSHint
	 * https://github.com/gruntjs/grunt-contrib-jshint
	 * Manage the options inside .jshintrc file
	 */
    jshint: {
        all: ['<%=config.js.srcDir%>/**', '!**/lib/**'],
        options: {
            jshintrc: '.jshintrc'
        }
    },


    /**
     * JSCS
     * https://github.com/dsheiko/grunt-jscs
     * Manage the options inside .jscs.json file
     */
    jscs: {
        src: ['<%=config.js.srcDir%>/**', '!**/lib/**'],
        options: {
            config: '.jscs'
        }
    },


    /**
     * SCSS Lint
     * https://github.com/ahmednuaman/grunt-scss-lint
     * Lint your SCSS
     */
    scsslint: {
        allFiles: [
			'<%=config.css.scssDir%>/*.scss', '<%=config.css.scssDir%>/**/*.scss'
        ],
        options: {
            config: '.scss-lint.yml',
            emitError: true,
            reporterOutput: '_testresults/scss-lint-report.xml',
            colorizeOutput: true
        },
    }
};