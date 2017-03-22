var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('assets/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('assets/css/'))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('assets/sass/**/*.scss',['styles']);
});


// var gulp = require('gulp');
// var sass = require('gulp-sass');

// gulp.task('default', function() {
//   console.log("I have configured a gulp file")
// }); 

// gulp.task('default', ['watch']);