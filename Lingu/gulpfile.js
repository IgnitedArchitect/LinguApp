var gulp = require('gulp');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var browserSync = require('browser-sync')


gulp.task('default', ['scripts','html','browser-sync']);


gulp.task('scripts', function(){
	gulp.src('src/**/*.js')
	//.pipe(uglify())
	.pipe(gulp.dest('build/js'));
	
});

gulp.task('html', function(){
	return gulp.src('src/**/*.html')
	//.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest('dist'))
	.pipe(browserSync.stream());
})

gulp.task('browser-sync', function(){
	browserSync.init({
		server : {
			baseDir : './dist'
		},
		open : true
	});
	gulp.watch('./src/*.html',['html']);
	
})