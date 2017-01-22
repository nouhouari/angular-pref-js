// Include gulp
var gulp = require('gulp');

// Include gulp plugins
var uglify = require('gulp-uglify');

// Minify task 
gulp.task('minify-js', function () {
    gulp.src('./src/*.js') // path to source files
    .pipe(uglify()) // Uglify
    .pipe(gulp.dest('dist')); // path to destination
});

// Set the default task for Gulp
gulp.task('default', ['minify-js']);
