var gulp = require('gulp'),
	coffee = require('gulp-coffee'),
	ngClassify = require('gulp-ng-classify'),
	ngmin = require('gulp-ngmin');

gulp.task('scripts', function () {
	var options = {
		// controller: {
		// 	format: '*',
		// 	suffix: ''
		// }
	};

	return gulp
		.src('**/*.coffee', {cwd: 'original'})
		.pipe(ngClassify(options))
		.pipe(gulp.dest('ng-classified'))
		.pipe(coffee({bare: true}))
		.pipe(ngmin())
		.pipe(gulp.dest('destination'));
});

gulp.task('watch', function () {
	gulp
		.watch('**/*.coffee', {cwd: 'original'}, ['scripts']);
});

gulp.task('default', ['scripts', 'watch']);