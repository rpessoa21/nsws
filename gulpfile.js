/*
Back end deve usar
dev = 'back'

Front end deve usar
dev = 'front'

Insira o nome do tema do WP na var theme

*/


var dev = 'front';

var theme = '';

if(dev == 'back') {


// ================================
// BACK END
// ================================

var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    stylus      = require('gulp-stylus'),
    prefix      = require('autoprefixer-stylus'),
    uglify      = require('gulp-uglify'),
    concat      = require('gulp-concat');


function swallowError (error) {
    console.log(error.toString())
    this.emit('end')
}


// ================================
// STYLUS
// ================================
gulp.task('css', function() {
    return gulp.src(['./assets/stylus/style.styl'])
        .pipe(stylus({
            use: prefix(),
            compress: true
            // linenos: true
        }))
        .on('error', swallowError)
        .pipe(gulp.dest('./dynamic/content/themes/'+ theme + '/css'))
        .pipe(browserSync.reload({stream: true}));
});

// ================================
// UGLIFY
// ================================
gulp.task('js', function() {
  return gulp.src('./assets/js/*.js')
    .pipe(uglify())
    .on('error', swallowError)
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest('./dynamic/content/themes/'+ theme + '/js'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('default', ['js', 'css'], function () {

    browserSync({server: './static'});

    gulp.watch('./assets/js/*.js', ['js']);
    gulp.watch('./assets/stylus/**/*.styl', ['css']);
});





} else {




// ================================
// FRONT END
// ================================
var gulp        = require('gulp'),
    pug         = require('gulp-pug'),
    browserSync = require('browser-sync'),
    stylus      = require('gulp-stylus'),
    prefix      = require('autoprefixer-stylus'),
    uglify      = require('gulp-uglify'),
    concat      = require('gulp-concat');
var reload      = browserSync.reload;



function swallowError (error) {
    console.log(error.toString())
    this.emit('end')
}


// ================================
// JADE
// ================================
gulp.task('templates', function() {

    return gulp.src(['./assets/pug/**/*.pug', '!./assets/pug/**/layout.pug', '!./assets/pug/**/_*.pug'])
        .pipe(pug({
            data: {
                baseHref: '',
                // baseHref: 'http://mgstudio.com.br/clientes_mg/' + theme + '/static/',
            },
            pretty: true
        }))
        .on('error', swallowError)
        .pipe(gulp.dest('./static/'));
});
// 

gulp.task('jade-watch', ['templates'], reload);

// ================================
// STYLUS
// ================================
gulp.task('css', function() {
    return gulp.src(['./assets/stylus/style.styl'])
        .pipe(stylus({
            use: prefix(),
            compress: true
            // linenos: true
        }))
        .on('error', swallowError)
        .pipe(gulp.dest('./static/css'))
        .pipe(browserSync.reload({stream: true}));
});

// ================================
// UGLIFY
// ================================
gulp.task('js', function() {
  return gulp.src('./assets/js/*.js')
    .pipe(uglify())
    .on('error', swallowError)
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest('./static/js'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('default', ['js', 'css', 'templates'], function () {

    browserSync({server: './static'});

    gulp.watch('./assets/js/*.js', ['js']);
    gulp.watch('./assets/stylus/**/*.styl', ['css']);
    gulp.watch('./assets/**/*.pug', ['jade-watch']);
});


}