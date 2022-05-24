var gulp        = require('gulp'), // Подключаем Gulp
    sass        = require('gulp-sass')(require('sass')), //Подключаем Sass пакет,
    browserSync = require('browser-sync'), // Подключаем Browser Sync
    cache       = require('gulp-cache'), // Подключаем библиотеку кеширования
    del         = require('del'); // Подключаем библиотеку для удаления файлов и папок

gulp.task('sass', function(){ // Создаем таск Sass
    return gulp.src('app/css/scss/*.scss') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('app/css')) // Выгружаем в папку app/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'app' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('scripts', function() {
    return gulp.src(['app/js/*.js'])
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('code', function() {
    return gulp.src('app/*.html')
        .pipe(browserSync.reload({ stream: true }))
});

gulp.task('clean', async function() {
    return del.sync('dist'); // Удаляем папку dist перед сборкой
});

gulp.task('sborka', async function() {

    var buildCss = gulp.src('app/css/*.css')
        .pipe(gulp.dest('dist/css'))

    var buildFonts = gulp.src('app/fonts/*') // Переносим шрифты в продакшен
        .pipe(gulp.dest('dist/fonts'))

    var buildJs = gulp.src('app/js/*') // Переносим скрипты в продакшен
        .pipe(gulp.dest('dist/js'))

    var buildHtml = gulp.src('app/*.html') // Переносим HTML в продакшен
        .pipe(gulp.dest('dist'));

});

gulp.task('clear', function (callback) {
    return cache.clearAll();
})

gulp.task('watch', function() {
    gulp.watch('app/css/scss/*.scss', gulp.parallel('sass')); // Наблюдение за sass файлами
    gulp.watch('app/*.html', gulp.parallel('code')); // Наблюдение за HTML файлами в корне проекта
    gulp.watch(['app/js/*.js'], gulp.parallel('scripts')); // Наблюдение за главным JS файлом и за библиотеками
});

// режим разработки
gulp.task('build', gulp.parallel('clear', 'sass', 'scripts', 'browser-sync', 'watch'));
// режим разработки
gulp.task('deploy', gulp.parallel('clear', 'sborka', 'clean', 'sass', 'scripts'));