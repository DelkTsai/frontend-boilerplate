var gulp = require('gulp');
var webpack = require('gulp-webpack');

var clean = require('gulp-clean');

// 引入webpack配置文件
var webpackConfig = require('./webpack.config');

// 引入跟版本号控制相关的插件
var rename = require('gulp-rename');  // 文件重命名
var rev = require('gulp-rev');   // 更改版本号
var revCollector = require('gulp-rev-collector');   //用户html模板更改引用路径

// 控制某型任务串行处理（妈蛋！因为gulp是并行处理任务的！）
var gulpSequence = require('gulp-sequence');

// 将browser-watch中
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

// 合并流，处理多个copy任务
var merge = require('merge-stream');

// browder-sync创建静态服务器
gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: "./public"
    }
  });
  gulp.watch("public/**/*.*").on('change', reload);
});

// scss-lint 检查
var scsslint = require('gulp-scss-lint');
// 处理缓存
var cache = require('gulp-cached');

gulp.task('scss-lint', function () {
  return gulp.src('src/**/**/*.scss')
    .pipe(cache('scsslint'))
    .pipe(scsslint({
      'config': '.scss-lint.yml'
    }));
});

// 如果需要代理的话用这个
//gulp.task('browser-sync', function() {
//  browserSync.init({
//    proxy: "你的域名或IP:端口号"
//  });
//});

// 正式环境webpack 完成js、sass的编译、压缩、打包和添加版本号
gulp.task('webpack', function () {
  return webpack(webpackConfig.production)
    .pipe(rev())
    .pipe(gulp.dest('public'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('public'));

});

// 测试环境webpack 完成js、sass的编译、打包
gulp.task('webpack-dev', function () {
  return webpack(webpackConfig.dev)
    .pipe(gulp.dest('public'));
});

gulp.task('rev', function () {
  return gulp.src(['public/*.json', 'src/index.html'])
    .pipe(revCollector({
      replaceReved: true
    }))
    .pipe(gulp.dest('public'));
});

gulp.task('watch', function () {
  gulp.watch([
    'src/**/**/*.*'
  ], ['scss-lint', 'webpack-dev']);
});

gulp.task('clean', function () {
  return gulp.src('public')
    .pipe(clean());
});

// 复制文件
gulp.task('copy', function () {
  return merge(
    gulp.src('src/index.html')
      .pipe(gulp.dest('public'))
    //gulp.src('bower_components/jquery/dist/jquery.min.js')
    //    .pipe(gulp.dest('public/third'))
  );

});

// 正式环境执行这个
gulp.task('default', gulpSequence('clean', 'copy', 'scss-lint', 'webpack', 'rev'));

// 本地开发，测试环境执行这个
gulp.task('dev', gulpSequence('clean', 'copy', 'webpack-dev', 'watch', 'browser-sync'));

// 单次执行gulp
gulp.task('one', gulpSequence('clean', 'copy', 'webpack-dev'));
