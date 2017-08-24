var gulp = require('gulp');
var uglify = require('gulp-uglify');
var htmlreplace = require('gulp-html-replace');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var streamify = require('gulp-streamify');

var path = {
	HTML: 'src/index.html',
  	MINIFIED_OUT: 'build.min.js',
  	OUT: 'build.js',
  	DEST: 'dist',
  	DEST_SRC: 'dist/src',
  	DEST_BUILD: 'dist/build',
  	ENTRY_POINT: './src/js/App.js'
};

//Transform files and put them into new folder 
gulp.task('transform', function(){
	gulp.src(path.JS)
		.pipe(react())
		.pipe(gulp.dest(path.DEST_SRC));
});

//Copy index.html to the newly created folder for reference
gulp.task('copy', function(){
	gulp.src(path.HTML)
		.pipe(gulp.dest(path.DEST));
});

//Watch files for updates
gulp.task('watch', function(){
	gulp.watch(path.HTML, ['copy']);

	var watcher = watchify(browserify({
		entries: [path.ENTRY_POINT],
		transform: [reactify],
		debug: true, 
		cache: {}, packageCache: {}, 
		fullPaths: true
	}));

	return watcher.on('update', function(){
		watcher.bundle()
			.pipe(source(path.OUT))
			.pipe(gulp.dest(path.DEST_SRC))
			console.log('Updated');
	})

	.bundle()
	.pipe(source(path.OUT))
	.pipe(gulp.dest(path.DEST_SRC));
});

//Activate watch by runing 'gulp' in terminal
gulp.task('default', ['watch']);

//Concatenate and minify js files
gulp.task('build', function(){
	browserify({
		entries: [path.ENTRY_POINT],
		transform: [reactify]
	})

	.bundle()
	.pipe(source(path.MINIFIED_OUT))
	.pipe(streamify(uglify(path.MINIFIED_OUT)))
	.pipe(gulp.dest(path.DEST_BUILD));
});

//Replace src paths in html file 
gulp.task('replaceHTML', function(){
	gulp.src(path.HTML)
		.pipe(htmlreplace({
			'js': 'build/' + path.MINIFIED_OUT
		}))
		.pipe(gulp.dest(path.DEST));
});

//Run both tasks together
//Whenever js files ar	e concatenated, change html pats
gulp.task('prod', ['build', 'replaceHTML']);