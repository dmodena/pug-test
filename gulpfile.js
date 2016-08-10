var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');

var locations = {
  "in": "./",
  "out": "./",
  "copy": "./dist/"
};

gulp.task('default', ['watch', 'views', 'styles']);

gulp.task('watch', function() {
  gulp.watch(locations.in + '*.pug', ['views']);
  gulp.watch([locations.in + '*.sass', locations.in + '*.scss'], ['styles']);
});

gulp.task('views', function() {
  return gulp.src(locations.in + '*.pug')
    .pipe(pug({locals: {}}))
    .pipe(gulp.dest(locations.out))
    .pipe(gulp.dest(locations.copy));
});

gulp.task('styles', function() {
  return gulp.src([locations.in + '*.sass', locations.in + '*.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(locations.out))
    .pipe(gulp.dest(locations.copy));
});
