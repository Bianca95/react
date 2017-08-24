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