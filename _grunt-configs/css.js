module.exports.tasks = {
    /**
     * Sass compilation
     * https://github.com/gruntjs/grunt-contrib-sass
     * Also creates source maps
     */
    sass: {
        dist: {
            options: {
                style: 'compressed',
                precision: 8
            },
            files: {
                '<%=config.css.distDir%>/temp/<%=config.css.srcFile%>.css': '<%=config.css.scssDir%>/<%=config.css.srcFile%>.scss',
                '<%=config.css.distDir%>/temp/<%=config.css.srcFile%>-old-ie.css': '<%=config.css.scssDir%>/<%=config.css.srcFile%>-old-ie.scss'
            }
        }
    },


    /**
     * Autoprefixer
     * https://github.com/nDmitry/grunt-autoprefixer
     * https://github.com/ai/autoprefixer
     * Auto prefixes your CSS using caniuse data
     */
    autoprefixer: {
        options: {
            // We are supporting the last 2 browsers, any browsers with >1% market share,
            // and ensuring we support IE8+ with prefixes
            browsers: ['> 5%', 'last 4 versions', 'firefox > 16', 'ie > 6'],
            map: true
        },
        dist: {
            expand: true,
            flatten: true,
            src: '<%=config.css.distDir%>/temp/*.css',
            dest: '<%=config.css.distDir%>/'
        }
    },


    /**
     * CSSO
     * https://github.com/t32k/grunt-csso
     * Minify CSS files with CSSO
     */
    csso: {
        dist: {
            options: {
                restructure: false //turns structural optimisations off as can mess up fallbacks http://bem.info/tools/optimizers/csso/description/
            },
            files: {
                '<%=config.css.distDir%>/<%=config.css.srcFile%>.css': '<%=config.css.distDir%>/<%=config.css.srcFile%>.css',
                '<%=config.css.distDir%>/<%=config.css.srcFile%>-old-ie.css': '<%=config.css.distDir%>/<%=config.css.srcFile%>-old-ie.css'
            }
        }
    }
};