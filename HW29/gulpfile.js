const gulp = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const babel = require('gulp-babel');
const avif = require('gulp-avif');

const BUILD = 'dist';
const SRC_JS = 'src/js/*.js';
const SCSS = 'src/scss/*.scss';
const IMAGES = 'src/img/*.jpg';
function watch () {
    return gulp.watch([SRC_JS, IMAGES, SCSS], gulp.series(makeScripts, makeImages, makeStyles));
}
function makeScripts () {
    return gulp.src(SRC_JS)
        .pipe(concat('build.min.js'))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest(BUILD));
}
function makeStyles () {
    return gulp.src(SCSS)
        .pipe(scss({ outputStyle: 'compressed' }))
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest(BUILD))
}
function makeImages () {
    return gulp.src(IMAGES)
        .pipe(avif({ quality: 50}))
        .pipe(gulp.dest(BUILD))
}

gulp.task('default', gulp.series(makeScripts, makeImages, makeStyles, watch));






