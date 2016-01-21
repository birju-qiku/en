'use strict';



module.exports = function(grunt) {



  // Project configuration.
  grunt.initConfig({

    copy: {
      html: {
        src: '../../**',
        dest: './dest/'
      },
    },

    'font-spider': {
      options: {
        backup: false
      },
      html: {
        src: './dest/**/*.html'
      }
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['copy', 'font-spider']);



};