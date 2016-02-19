module.exports={
  options: {
    sourceMap: true,
    includePaths: [
      './bower_components/material-design-lite/src/'
    ]
  },
  dist: {
    files: [{
    expand: true,
    flatten: true,
    src: ['scss/*.scss'],
    dest: 'public/stylesheets/',
    ext: '.css'
  }]
  }
};
