var gulp    = require('gulp'),
	coffee     = require('gulp-coffee'),
	ngClassify = require('gulp-ng-classify'),
	path       = require('path');

function extractModuleName (file) {
	var options         = {},
		moduleName         = 'app',
		from               = file['base'],
		to                 = file['path'],
		relativePath       = path.relative(from, to),
		unixifiedPath      = relativePath.replace(/\\/g, '/'),
		segments           = unixifiedPath.split('/'),
		segmentCount       = segments.length,
		containsModuleName = segmentCount >= 3 && segments[0] === 'modules';
	
	if (containsModuleName) {
		moduleName = segments[1];;
	}

	options.appName = moduleName;

	return options;
}

gulp.task('scripts', function () {
	return gulp
		.src('**/*.coffee', {cwd: 'src'})
		.pipe(ngClassify(extractModuleName))
		.pipe(coffee())
		.pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
	gulp
		.watch('**/*.coffee', {cwd: 'src'}, ['scripts']);
});

gulp.task('default', ['scripts', 'watch']);