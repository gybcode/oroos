var gulp = require('gulp');
var usemin = requrie('gulp-usemin');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');

var jetpack = require('fs-jetpack');

var projectDir = jetpack;
var scrDir = projectDir.cwd('./app');
var destDir = projectDir.cwd('./build');

gulp.task('clean', function(){
  return destDir.dirAsync('.', {empty: true});
});
gulp.task('copy', function(){
  return projectDir.copyAsync('app', destDir.path(), {
    overwrite: true,
    matching: [
      '*.html',
      './components/**/*.html'
    ]
  });
});
gulp.task('build', function(){
  return gulp.src('./app/index.html')
    .pipe(usemin({app:[uglify()], css:[cssmin()]}))
    .pipe(gulp.dest('build/'));
});