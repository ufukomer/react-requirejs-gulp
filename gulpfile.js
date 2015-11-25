var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var chalk = require('chalk');

gulp.task('default', ['watch']);

/* Single watch */
//gulp.watch('src/scss/*.scss', ['sass']);

/* This second parameter is an array of tasks that must be completed before Gulp runs watch. */
gulp.task('watch', ['browserSync', 'sass', 'compileComponents', 'compilePages', 'bower', 'html', 'js'], function () {
    gulp.watch('src/scss/**/*.+(scss|sass)', ['sass']);
    gulp.watch('src/js/components/**/*.js', ['compileComponents']);
    gulp.watch('src/js/pages/**/*.js', ['compilePages']);
    gulp.watch('src/*.html', ['html']);
    gulp.watch('src/bower_components/**', ['bower']);
    gulp.watch('src/js/main.js', ['js']);
});

gulp.task('js', () => {
    gulp.src('src/js/main.js')
        .pipe(gulp.dest('dist/src/js'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('html', () => {
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist/src'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('bower', () => {
    gulp.src('src/js/bower_components/**')
        .pipe(gulp.dest('dist/src/js/bower_components'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('compilePages', () => {
    gulp.src('src/js/pages/**/*.js')
        .pipe(babel({
            presets: ['react']
        }))
        .pipe(gulp.dest('dist/src/js/pages'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('compileComponents', () => {
    gulp.src('src/js/components/**/*.js')
        .pipe(babel({
            presets: ['react']
        }))
        .pipe(gulp.dest('dist/src/js/components'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('sass', () => {
    gulp.src('src/scss/**/*.+(scss|sass)')
        //.pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['ie 8-9', 'last 2 versions']
        }))
        //.pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/src/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('browserSync', () => {
    browserSync({
        server: {
            baseDir: 'dist/src'
        },
        port: 3000,
        browser: 'google chrome',
        // Notification on the top right corner
        notify: true
    })
});