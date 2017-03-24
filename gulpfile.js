var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');
var webserver = require('gulp-webserver');

// gulp.task('styles', function() {
//     gulp.src('assets/sass/**/*.scss')
//         .pipe(sass().on('error', sass.logError))
//         .pipe(gulp.dest('assets/css/'))
// });

gulp.task('sass', function () {
	return sass('sass/style.scss', {
		sourcemap: true,
		style: 'compressed' //can also be 'expanded', 'nested', or 'compact'. github.com/sindresorhus/gulp-ruby-sass
	})
	.on('error', function (err) {
		console.error('Error!', err.message);
	})
	.pipe(sourcemaps.write())
	.pip(gulp.dest('assets/css/'));
});

//Watch task
// gulp.task('default',function() {
//     gulp.watch('assets/sass/**/*.scss',['styles']);
// });

gulp.task('watch', function() {
	gulp.watch('assets/sass/**/*.scss',['styles']);
});

gulp.task('webserver', function() {
	gulp.src('localist/assets/')
	.pipe(webserver({
		livereload: true, //ask Gabe about this webserver business.
		open:true
	}));
});

gulp.task('default', ['sass', 'watch', 'webserver']);

// var gulp = require('gulp');
// var sass = require('gulp-sass');

// gulp.task('default', function() {
//   console.log("I have configured a gulp file")
// }); 

// gulp.task('default', ['watch']);