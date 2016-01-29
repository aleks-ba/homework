var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('js', function(){
  return gulp.src(['./app/components/*.js', './app/components/**/*.js', '!./app/components/**/*.test.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./app/dist'));
});

