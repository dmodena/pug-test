var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');

gulp.task('default', ['watch', 'views', 'styles']);

gulp.task('watch', function() {
    gulp.watch('./*.pug', ['views']);
    gulp.watch(['./*.sass', './*.scss'], ['styles']);
});

gulp.task('views', function() {
    return gulp.src('./*.pug')
    .pipe(pug({locals: {}}))
    .pipe(gulp.dest('./'))
});

gulp.task('styles', function() {
    return gulp.src(['./*.sass', './*.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./'));
})
