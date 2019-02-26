var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var nodemon = require('gulp-nodemon');


gulp.task('browser-sync', ['nodemon'], function () {
  browserSync.init(null, {
    proxy: "http://localhost:8000", // port of node server
  });
});

gulp.task('default', ['browser-sync'], function () {
  gulp.watch(["./public/*"], reload);
});

gulp.task('nodemon', function (cb) {
  var callbackCalled = false;
  return nodemon({
    script: './bin/www',
    env: {
      PORT: 8000
    }
  }).on('start', function () {
    if (!callbackCalled) {
      callbackCalled = true;
      cb();
    }
  });
});
