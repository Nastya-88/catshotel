"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include")
var autoprefixer = require("autoprefixer");
var minify = require("gulp-csso");
var imagemin =require("gulp-imagemin");
// var svgstore = require("gulp-svgstore");
var rename = require("gulp-rename");
var server = require("browser-sync").create();
var run =require("run-sequence");
var del = require("del");


gulp.task("style", function() {
  gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({overrideBrowserslist: [
          "Android 2.3",
          "Android >= 4",
          "Chrome >= 20",
          "Firefox >= 24",
          "Explorer >= 10",
          "iOS >= 6",
          "Opera >= 11",
          "Safari >= 4"
          ]})
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});


gulp.task("html", function () {
  return gulp.src("source/*.html")
    .pipe(posthtml([
      include()
    ]))
    .pipe(gulp.dest("build"))
    .pipe(server.stream());
});

gulp.task("js", function() {
  return gulp.src("source/js/*.js")
    .pipe(gulp.dest("build/js"))
    .pipe(server.stream());
});

gulp.task("images", function () {
  return gulp.src("source/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true}),
      imagemin.svgo()
    ]))
  .pipe(gulp.dest("img"));
});

gulp.task("serve", ['build'], function() {
  server.init({
    server: "build/"
  });
  gulp.watch("source/sass/**/*.scss", ["style"]);
  gulp.watch("source/*.html", ["html"]);
  gulp.watch("source/js/*.js", ["js"]);
});

gulp.task("copy", function () {
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/img/**",
    "source/js/**"
  ], {
    base: "source"
  })
    .pipe(gulp.dest("build"));
});

gulp.task("clean", function () {
  return del("build");
})

gulp.task("build", function (done) {
  run(
      "clean",
      "copy",
      "style",
      "html",
      done
  );
});
