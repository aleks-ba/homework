var gulp = require('gulp'),
    watch = require('gulp-watch');

gulp.task('js:watch', function () {
  gulp.watch('app/components/**/*.js', ['js']);
});

function doSomeStuff() {
  console.log('Error');
}