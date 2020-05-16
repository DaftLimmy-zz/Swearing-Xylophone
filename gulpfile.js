var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('build', function() {
    return gulp.src('styles.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({
        stream: true
    }))
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('watch', gulp.series('browserSync', 'build'), function(){
    gulp.watch('styles.scss', gulp.series('build'));
});