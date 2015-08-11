module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    connect: {
      server: {
        options: { port: 9001 }
      }
    },

    sass: {
      dist: {
        files: { 
          'css/practice.css': 'css/practice.sass',
          'css/main.css': 'css/main.sass'
        }
      }
    },

    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer-core')({ browsers: 'last 2 versions' })
        ]
      },
      dist: {
        src: 'css/*.css'
      }
    },

    watch: {
      css: {
        files: ['css/*.sass'],
        tasks: ['sass', 'postcss'],
        options: {
          livereload: true,
          atBegin: true
        }
      },
      html: {
        files: ['*.html'],
        options: {
          livereload: true
        }
      }
    },
  });

  grunt.registerTask('default', ['connect', 'watch']);
}