var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var postcssnested = require('postcss-nested');
var cssImport = require('postcss-import');




gulp.task('default', function() {
  console.log('Hooray - I am here')
});  

gulp.task('html', function() {
  console.log('Imagine something useful happening to your Html here')
});

gulp.task('styles', function() {
  // console.log('Imagine Sass or Post Css tasks running here')
  return gulp.src('./app/assets/styles/style.css')
   .pipe(postcss([cssImport, postcssnested, cssvars, autoprefixer]))
   .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function(){
  watch('./app/assets/travelblog-tech-ref.html', function(){
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function() {
   gulp.start('styles');
  });


});