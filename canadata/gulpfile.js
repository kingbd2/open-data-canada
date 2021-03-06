var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    sass = require('gulp-ruby-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    webserver = require('gulp-webserver');

gulp.task('js', function() {
  return gulp.src('builds/sassEssentials/js/myscript.js')
    .pipe(jshint('./.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('sass', function () {
    return sass('process/sass/blog_style.scss', {
      sourcemap: true,
      style: 'expanded'
      // expanded, nested, compact, compressed
    })
    .on('error', function (err) {
        console.error('Error!', err.message);
    })
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('blog/static/'));
});

// 'builds/sassEssentials/css'

gulp.task('watch', function() {
  // gulp.watch('builds/sassEssentials/js/**/*', ['js']);
  gulp.watch(['process/sass/**/*'], ['sass']);
});
//
// gulp.task('webserver', function() {
//     gulp.src('inventory_explorer/templates/inventory_explorer')
//         .pipe(webserver({
//             livereload: true,
//             open: true
//         }));
// });

gulp.task('default', ['watch', 'sass']);
