var gulp = require('gulp'),
    sass = require('gulp-sass'),
    maps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename');

gulp.task('concatScripts', function () {
    'use strict';
    return gulp.src([
        'Documentation/src/js/main.js',        
    ])
        .pipe(maps.init())
        .pipe(concat('app.js'))
        .pipe(maps.write('./'))
        .pipe(gulp.dest('js'));
});

gulp.task('minifyScripts', ["concatScripts"], function () {
    'use strict';
    return gulp.src('js/app.js')
        .pipe(plumber({
            errorHandler: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest('js/'));
});

gulp.task('compileSass', function () {
    'use strict';
    return gulp.src('src/scss/styles.scss')
        .pipe(plumber({
            errorHandler: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(maps.init())
        .pipe(sass())
        .pipe(autoprefixer({ browsers: ['> 1%'] }))
        .pipe(maps.write('./'))
        .pipe(gulp.dest('css/'));
});


gulp.task('watchFiles', function () {
    'use strict';
    gulp.watch(['src/scss/**/*.scss', './scss/*.scss'], ['compileSass']);
    gulp.watch(['src/js/main.js'], ['minifyScripts']);
});

gulp.task('watch', ['watchFiles']);

gulp.task('default', ['compileSass', 'minifyScripts']);