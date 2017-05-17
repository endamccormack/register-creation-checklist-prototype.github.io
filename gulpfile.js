'use strict';

const gulp = require('gulp')
const sass = require('gulp-sass')

// Compile scss files to css
gulp.task('default', () => {
  return gulp.src('./assets/sass/**/*.scss')
    .pipe(sass({
      includePaths: [
        'node_modules/govuk-elements-sass/public/sass',
        'node_modules/govuk_frontend_toolkit/stylesheets',
        'assets/stylesheets/'
      ]
    }).on('error', sass.logError))
    .pipe(gulp.dest('./assets/stylesheets/'))
})
