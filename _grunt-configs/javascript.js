module.exports.tasks = {
    /**
	 * Browserify
	 * https://github.com/jmreidy/grunt-browserify
	 * Grunt task for node-browserify – allows CommonJS-style JS code and packages it for use in the browser
	 */
    browserify: {
        main: {
            src: ['<%=config.js.srcDir%>/<%=config.js.entryFile%>'],
            dest: '<%=config.js.distDir%>/<%=config.js.entryFile%>',
            options: {
                browserifyOptions: {
                    debug: true,
                    fullPaths: false
                },
                plugin: [
                    ['minifyify', {
                        output: '<%=config.js.distDir%>/<%=config.js.entryFile%>.map',
                        map: '<%=config.js.entryFile%>.map'
                    }]
                ],
                watch: true
            }
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