var gulp = require('gulp');
var concat = require('gulp-concat');
var prefix = require('gulp-autoprefixer');


var sources = {
  css: [
    'src/assets/css/reset.css',
    'src/assets/css/typo.css',
    'src/assets/css/blocks.css',
    'src/assets/modules/**/*.css'
  ],
  js: [
    'src/assets/vendor/**/*.js',
    'src/assets/modules/**/*.js',
    'src/assets/js/*.js'
  ],
  fonts: [
    'src/assets/fonts/**/*.ttf',
    'src/assets/fonts/**/*.woff',
    'src/assets/fonts/**/*.eot',
    'src/assets/fonts/**/*.svg',
    'src/assets/modules/**/*.ttf',
    'src/assets/modules/**/*.woff',
    'src/assets/modules/**/*.eot',
    'src/assets/modules/**/*.svg'
  ]
};

gulp.task('css', function() {
  gulp.src(sources.css)
    .pipe(concat('common.css'))
    .pipe(prefix(['last 2 versions']))
    .pipe(gulp.dest('build/assets'));
});

gulp.task('js', function() {
  gulp.src(sources.js)
    .pipe(concat('common.js'))
    .pipe(gulp.dest('build/assets'));
});

gulp.task('img', function() {
  gulp.src('src/assets/favicon.png')
    .pipe(gulp.dest('build/assets'));
});

gulp.task('fonts', function() {
  gulp.src(sources.fonts)
    .pipe(gulp.dest('build/assets/fonts'))
});

gulp.task('default', ['css', 'js', 'img', 'fonts']);
