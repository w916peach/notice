var gulp = require('gulp');
var browserSync = require('browser-sync');

// 浏览器重载任务
gulp.task('reload',browserSync.reload);
// 开发服务器启动
gulp.task('devServer',function(){
    browserSync({
        server:{
            baseDir:'../dist'
        }
    });
    // 监听dist中的文件变动，执行相应的任务
    gulp.watch('../dist/*',['reload']);
});

// 添加各项任务
