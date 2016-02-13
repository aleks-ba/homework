var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    gulpMocha = require('gulp-mocha'),
    bower = {
      json: require('./bower.json'),
      directory: './bower_components/',
      ignorePath: '../..'
    };

var wiredep = require('wiredep').stream;


gulp.task('default', function () {

  nodemon({
    script: 'app.js',
    ext: 'js',
    env: {
      PORT: 8000
    },
    ignore: ['./node_modules/**']
  })
      .on('restart', function () {
        console.log('restarting');
      })
});

gulp.task('test', function () {
  gulp.src('Tests/*.js', {read: false})
      .pipe(gulpMocha({reporter: 'nyan'}))
});




gulp.task('bower', function () {
  console.log(__dirname);

  gulp.src('./src/client/app/index.html')
      .pipe(wiredep())
      .pipe(gulp.dest('./src/client/app/'));
});

var gulp       = require('gulp');
var concat     = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

var appJsFiles = [
  './src/client/app/**/*.js',
  '!./src/client/app/main.js',
  '!./src/client/app//**/*.spec.js',
  '!./src/client/app//dist/*.js'
];


var allJsFiles = appJsFiles;

gulp.task('js:concat', function () {
  var sources = gulp.src(appJsFiles);

  return sources
      .pipe(sourcemaps.init())
      .pipe(concat('main.js'))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('./src/client/dist/'));
});


var gulp  = require('gulp');
var watch = require('gulp-watch');

const JS_FOLDER = [
  './src/client/app/*.js',
  './src/client/app/**/*.js',
];



gulp.start('js:concat');



gulp.task('js:watcher', function (cb) {
  gulp.watch(JS_FOLDER, ['js:concat']);
  watch(JS_FOLDER, watcher);
});

function watcher() {
  gulp.start('js:concat');
}



