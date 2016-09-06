var gulp = require('gulp');
var Jasmine = require('jasmine');
var JasmineConsoleReporter = require('jasmine2-reporter').Jasmine2Reporter;
var merge = require('merge2');
var path = require('path');

// PATHS
var sourceRoot = 'lib';
var targetRoot = 'build';

var gulpPlugins = require('gulp-load-plugins')();

var typescriptNodeCompileOptions = {
    declaration: true,
    noImplicitAny: true,
    target: 'es6',
    module: 'commonjs'
};

var codeNodeTarget = targetRoot;
var definitionNodeTarget = path.resolve(targetRoot, 'definitions');
gulp.task('build', function() {
    var tsResult = gulp.src(codeNodeSource, sourceOptions)
        .pipe(gulpPlugins.sourcemaps.init())
        .pipe(gulpPlugins.typescript(typescriptNodeCompileOptions));
    return merge([
        merge([
            tsResult.js.pipe(gulpPlugins.sourcemaps.write()),
            gulp.src(thirdPartyNodeSource, sourceOptions)]).pipe(gulp.dest(codeNodeTarget)),
        tsResult.dts.pipe(gulp.dest(definitionNodeTarget))]);
});

var codeNodeSource = [
    path.resolve(sourceRoot, '**/!(*_test).ts')];
var testNodeSource = [
    path.resolve(sourceRoot, '**/*_test.ts')];
var sourceOptions = { base: sourceRoot };
var testNodeTarget = targetRoot;
gulp.task('build', function() {
    return merge([gulp.src(codeNodeSource, sourceOptions), gulp.src(testNodeSource, sourceOptions)])
            .pipe(gulpPlugins.sourcemaps.init())
            .pipe(gulpPlugins.typescript(typescriptNodeCompileOptions)).js
            .pipe(gulpPlugins.sourcemaps.write())
            .pipe(gulp.dest(testNodeTarget));
});

gulp.task('test', ['build'], function(callback) {
    var jasmine = new Jasmine();
    jasmine.loadConfigFile(path.resolve(__dirname, 'jasmine.conf.json'));
    jasmine.onComplete(function(passed) {
        if (passed) {
            callback();
        } else {
            callback(new Error('Test fails!'));
        }
    });
    jasmine.addReporter(new JasmineConsoleReporter());
    jasmine.execute();
});

gulp.task('watch', ['build'],
    function() {
        gulp.watch(codeNodeSource, ['build']);
        gulp.watch(testNodeSource, ['build']);
    });
