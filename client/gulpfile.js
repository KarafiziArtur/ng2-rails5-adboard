var gulp = require('gulp');

// HTML task
gulp.task('html', function() {
  return gulp.src('./src/app/**/*.html')
      .pipe(gulp.dest('../public/app'));
});

// Watching for LiveReload
gulp.task('watch', function() {
  gulp.watch([
        './src/app/**/*.html'],
      ['html']);
});

// Default task
gulp.task('default',['html', 'watch']);