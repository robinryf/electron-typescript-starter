var gulp = require('gulp');
var tsb = require('gulp-tsb');
var watch = require('gulp-watch');
	
	// create and keep compiler 
	var compilation = tsb.create({
		target: 'es5',
		module: 'commonjs',
		declaration: false
	});
    
    var srcGlob = 'src/**/*.ts';
    var htmlGlob = './src/**/*.html';
    var dest = './dist/local';
    

    gulp.task('stream-compile', function ()
    {
        watch(srcGlob, function()
        {
           gulp.start('compile');
        });
    });
    
    gulp.task('stream-html', function () 
    {
        watch(htmlGlob, function ()
        {
           gulp.start('copy-html')
        });
    });
    
	
    // DEFAULT
    gulp.task('compile', function() 
    {
		return gulp.src(srcGlob)
			.pipe(compilation())
			.pipe(gulp.dest(dest));
	});
    
    gulp.task('copy-html', function() 
    {
         return gulp.src(htmlGlob)
            .pipe(gulp.dest(dest));
    });
    
    
    
gulp.task('default', ['compile', 'copy-html']);
gulp.task('watch', ['stream-compile', 'stream-html']);
