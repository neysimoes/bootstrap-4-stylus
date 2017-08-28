'use strict';
const gulp        = require('gulp'),
      postcss     = require('gulp-postcss'),
      stylus      = require('gulp-stylus'),
      pxtorem     = require('postcss-pxtorem'),
      rupture     = require('rupture'),
      mqpacker    = require('css-mqpacker'),
      plumber     = require('gulp-plumber'),
      cssnano     = require('cssnano');

const CONFIG = {
  stylus: {
    'include css': true,
    'use': [rupture()]
  },
  cssNanoConfig: {
    zindex: false,
    minifyFontValues: false,
    discardUnused: {fontFace: false},
    autoprefixer: ['last 2 versions', 'IE >= 9']
  },
  postCSS: [
    pxtorem(),
    mqpacker(),
    cssnano(CONFIG.cssNanoConfig)
  ]
};


gulp.task('stylus', function() {
  return gulp.src(sources)
    .pipe(plumber())
    .pipe(stylus(config))
    .pipe(postcss())
    .pipe(gulp.dest(destinyDir));
});
