var gulp = require('gulp');
var tsb = require('gulp-tsb');
var watch = require('gulp-watch');
	
	// create and keep compiler 
	var compilation = tsb.create({
		target: 'es5',
		module: 'commonjs',
		declaration: false,
        sourceMap: true
	});
    
    var srcGlob = 'src/**/*.ts';
    var htmlGlob = 'src/**/*.html';
    var dependenciesGlob = [
        'node_modules/three/examples/js/Detector.js',
        'node_modules/three/three.min.js'
    ]
    var resourcesGlob = 'resources/**';
    var dest = 'dist/local';

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
           gulp.start('copy-html');
        });
    });
    
    gulp.task('stream-dependencies', function()
    {
        watch(dependenciesGlob, function()
        {
            gulp.start('copy-dependencies');
        });
    });
    
    gulp.task('stream-resources', function()
    {
        watch(resourcesGlob, function()
        {
            gulp.start('copy-resources');
        });
    });
	
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
    
    gulp.task('copy-dependencies', function()
    {
        return gulp.src(dependenciesGlob, { base: "."})
            .pipe(gulp.dest(dest));
    });
    
    gulp.task('copy-resources', function()
    {
        return gulp.src(resourcesGlob, {base: "."})
            .pipe(gulp.dest(dest));
    });
    
    
gulp.task('default', ['compile', 'copy-html', 'copy-dependencies', 'copy-resources']);
gulp.task('watch', [
    'default',
    'stream-compile',
    'stream-html',
    'stream-dependencies',
    'stream-resources'
    ]);
