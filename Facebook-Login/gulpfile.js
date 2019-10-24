const gulp = require('gulp'),
      browserSync = require('browser-sync').create();

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    },
    proxy: "localhost:8080"
  });
  gulp.watch(['*.html', '*.css']).on('change', browserSync.reload);
})

gulp.task('default', ['serve']);