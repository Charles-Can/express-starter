module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    express: require('./grunt/grunt.express'),
    watch: require('./grunt/grunt.watch')
  });

  grunt.registerTask('default', ['express', 'watch']);
};
