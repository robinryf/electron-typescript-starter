var gulp = require('gulp');
var tsb = require('gulp-tsb');
	
	// create and keep compiler 
	var compilation = tsb.create({
		target: 'es5',
		module: 'commonjs',
		declaration: false
	});
	
	gulp.task('compile', function() {
		return gulp.src('src/**/*.ts')
			.pipe(compilation())
			.pipe(gulp.dest('./dist/local'));
	});
    
    gulp.task('copy-index-html', function() {
    gulp.src('./src/**/*.html')
    // Perform minification tasks, etc here
    .pipe(gulp.dest('./dist/local'));
    });
    
gulp.task('default', ['compile', 'copy-index-html']);