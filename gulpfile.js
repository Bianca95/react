var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var react = require('gulp-react');
var htmlreplace = require('gulp-html-replace');

var path = {
	HTML: 'src/index.html',
  	ALL: ['src/js/*.js', 'src/js/**/*.js', 'src/index.html'],
  	JS: ['src/js/*.js', 'src/js/**/*.js'],
  	MINIFIED_OUT: 'build.min.js',
  	DEST_SRC: 'dist/src',
  	DEST_BUILD: 'dist/build',
  	DEST: 'dist'
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

//Update with every change
gulp.task('watch', function(){
	gulp.watch(path.ALL, ['transform', 'copy']);
});

//Activate watch by runing 'gulp' in terminal
gulp.task('default', ['watch']);

//Concatenate and minify js files
gulp.task('build', function(){
	gulp.src(path.JS)
		.pipe(react())
		.pipe(concat(path.MINIFIED_OUT))
		.pipe(uglify(path.MINIFIED_OUT))
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