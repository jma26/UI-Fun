const gulp = require('gulp'),
      browserSync = require('browser-sync').create();

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    },
  });
  gulp.watch(['*.html', '*.css']).on('change', browserSync.reload);
})

gulp.task('default', gulp.series('serve'));