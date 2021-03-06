module.exports={
    express: {
      files:  [ '**/*.js' ],
      tasks:  [ 'express' ],
      options: {
        spawn: false // for grunt-contrib-watch v0.5.0+, "nospawn: true" for lower versions. Without this option specified express won't be reloaded
      }
    },
    sass: {
      files: [ '**/*.scss' ],
      tasks: ['sass'],
      options: {
        livereload: true,
      }
    }
  };
