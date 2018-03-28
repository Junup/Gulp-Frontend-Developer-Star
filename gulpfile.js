var gulp = require('gulp'),
    connect = require('gulp-connect'),
    fileinclude  = require('gulp-file-include'),
    less = require('gulp-less'),
    htmlmin = require('gulp-htmlmin'),
    smushit = require('gulp-smushit'),
    cssmin = require('gulp-minify-css');


// 搭建本地站点
gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});

//编译less文件
gulp.task('less', function () {
    gulp.src('src/**/*.less')
        .pipe(less())
        .pipe(cssmin())
        .pipe(gulp.dest('app/css'));
});

// 生成文件
gulp.task('html', function () {
    gulp.src('src/*.html')
    .pipe(connect.reload());
});
// inbclude文件编译
gulp.task('fileinclude', function() {
    var options = {
        removeComments: true,
        collapseWhitespace: true, 
        minfyJS: true,
        minfyCss: true,
    };
    gulp.src('src/**/*.html')
        .pipe(fileinclude({
          prefix: '@@',
          basepath: '@file'
        }))
        .pipe(htmlmin(options))
    .pipe(gulp.dest('app'));
});

// 图片压缩
gulp.task('smushit', function () {
    return gulp.src('src/image/*')
        .pipe(smushit({
            verbose: true
        }))
        .pipe(gulp.dest('app/image'));
});

gulp.task('watch', function () {
  gulp.watch(['src/*.html','src/**/*.less'], ['html','fileinclude','less']);
});

gulp.task('default', ['connect', 'watch']);
