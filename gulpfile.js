var gulp = require('gulp');
var concat = require('gulp-concat');
var prefix = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');


var sources = {
  css: [
    'src/_assets/css/reset.css',
    'src/_assets/css/typo.css',
    'src/_assets/css/blocks.css',
    'src/_assets/modules/**/*.css'
  ],
  js: [
    'src/_assets/vendor/**/*.js',
    'src/_assets/modules/**/*.js',
    'src/_assets/js/*.js'
  ]
};

gulp.task('css', function() {
  gulp.src(sources.css)
    .pipe(concat('common.css'))
    .pipe(prefix(['last 2 versions']))
    .pipe(minifycss())
    .pipe(gulp.dest('build/assets'));
});

gulp.task('js', function() {
  gulp.src(sources.js)
    .pipe(concat('common.js'))
    .pipe(gulp.dest('build/assets'));
});

gulp.task('default', ['css', 'js']);
