
var gulp = require('gulp');
var fileinclude = require('gulp-file-include');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

//gulp 를 사용하기 위해서는 task 정의 및 plugin 설치가 필요
gulp.task('default', function(){
	console.log("TEST TEST TEST");
});


//html file include 
gulp.task('fileinclude', function(){
	gulp.src(['./app/src/index.html'], {base : './app'})
	.pipe(fileinclude({
		prefix: '@@',
		basepath: '@file'
	}))
	.pipe(gulp.dest('./app'));
});

//sass 
/*
gulp.task('sass', function(){
	return gulp.src('./scss/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./dist/css'));
});

https://stackoverflow.com/questions/39665773/gulp-error-watch-task-has-to-be-a-function

*/

gulp.task('sass', function(){
	return gulp.src('./scss/*.scss')
	.pipe(sass({outputStyle : 'compressed'}).on('error', sass.logError))
	.pipe(gulp.dest('./dist/css'));
});

gulp.task('sass:watch', function(){
  gulp.watch('./scss/*.scss', gulp.series('sass'));
});
