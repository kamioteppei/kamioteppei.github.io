var gulp = require('gulp');

var gulpLoadPluginsOptions = {
  pattern: ['gulp-*', 'gulp.*'],
  replaceString: /\bgulp[\-.]/
};

var $ = require('gulp-load-plugins')(gulpLoadPluginsOptions);

// var browserify = require('browserify');
// var source = require('vinyl-source-stream');
// var buffer = require('vinyl-buffer');
var exec = require('child_process').exec;

var del = require('del');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');


// Config

var appName = 'jfgp';

var dir = {
  sass: '_sass/',
  cssSrc: '_css/',
  jsSrc: '_js/',
  css: 'css/',
  js: 'js/',
  test: 'test/',
  dist: 'assets/',
  site: '_site/'
};

var name = {
  bundle: appName,
  js: {
    bundle: appName + '.js',
    origin: 'origin.js'
  }
};

var src = {
  sass: dir.sass + '**/*.scss',
  css: dir.cssSrc + '**/*.css',
  js: [
    dir.jsSrc + '**/*.js',
    '!' + dir.jsSrc + name.js.origin
  ],
  jsDist: [
    dir.js + '**/*.js',
    '!' + dir.js + '**/' + name.js.demo
  ],
  jekyll: [
    '**/*',
    '!' + dir.sass + '**/*',
    '!' + dir.jsSrc + '**/*',
    '!' + dir.site + '**/*',
    '!gulpfile.js',
    '!package.json',
    '!node_modules/**/*'
  ]
};

var options = {
  sass: {
    outputStyle: 'expanded',
    includePaths: [
      'node_modules/normalize-scss/sass/',
      'node_modules/pygments-css/',
      'node_modules/sass-web-fonts',
      'node_modules/motiv.scss/dist/scss/',
      'node_modules/tocjs/dist/'
    ]
  },
  pleeease: {
    autoprefixer: {
      browsers: ['last 2 versions']
    },
    minifier: false,
    sourcemaps: false,
    sass: false,
    mqpacker: true
  },
  uglify: {
    preserveComments: 'some'
  }
};

var watching = false;

// Tasks

gulp.task('jekyll', function(callback){
  var jekyllOptions = {
    subCommand: 'build',
    baseUrl: '""',
    configFiles: './_config.yml'
  };

  // var jekyllCommand = 'jekyll <%= options.subCommand %> --config <%= options.configFiles %>';
  var jekyllCommand = 'jekyll <%= options.subCommand %> --baseurl <%= options.baseUrl %>';
  var command = $.util.template(jekyllCommand, {file: null, options: jekyllOptions});

  exec(command, function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    callback(err);
  });
});

gulp.task('sass', function(){
  return gulp.src(src.sass)
    .pipe($.cached('sass'))
    .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
    .pipe($.sass(options.sass).on('error', $.sass.logError))
    .pipe($.pleeease(options.pleeease))
    .pipe(gulp.dest(dir.dist + dir.css))
    .pipe($.pleeease({minifier: true}))
    .pipe($.rename({suffix: '.min'}))
    .pipe(gulp.dest(dir.dist + dir.css));
    // .pipe(browserSync.reload({stream: true}));
});

gulp.task('css', function(){
  return gulp.src(dir.cssSrc + '**/*.css')
    .pipe($.cached('css'))
    .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
    .pipe(gulp.dest(dir.dist + dir.css))
    .pipe($.pleeease({minifier: true}))
    .pipe($.rename({suffix: '.min'}))
    .pipe(gulp.dest(dir.dist + dir.css));
});

gulp.task('browserify', $.watchify(function(watchify){
  return gulp.src(dir.jsSrc + name.js.origin)
    .pipe(watchify({watch: watching}))
    .pipe($.plumber({errorHandler: $.notify.onError('<%= error.message %>')}))
    .pipe($.streamify($.uglify()))
    .pipe($.rename({basename: appName}))
    .pipe(gulp.dest(dir.dist + 'js/'));
}));

gulp.task('js', function(){
  return gulp.src(src.js)
    .pipe(gulp.dest(dir.dist + 'js/'));
});

gulp.task('js', function(){
  return gulp.src(src.js)
    .pipe(gulp.dest(dir.dist + 'js/'))
    .pipe($.uglify(options.uglify))
    .pipe($.rename({suffix: '.min'}))
    .pipe(gulp.dest(dir.dist + 'js/'));
});

gulp.task('clean', function(){
  return del([
    dir.dist + dir.css + '**/*.css',
    dir.dist + dir.js + '**/*.js'
  ]);
});

gulp.task('clean:site', function(){
  return del(dir.site + '**/*');
});

gulp.task('clean:all', ['clean', 'clean:site']);

gulp.task('build', function(callback){
  return runSequence(
    ['sass', 'css', 'js', 'browserify'],
    'jekyll',
    callback
  );
});

gulp.task('reset', function(callback){
  return runSequence(
    'clean',
    'build',
    callback
  );
});

gulp.task('browser-sync', function(){
  browserSync({
    server: {
      baseDir: dir.site
    },
    browser: 'google chrome',
    reloadDelay: 2500,
    open: false
  });
});

gulp.task('enable-watch-mode', function(){
  watching = true;
});
gulp.task('watchify', ['enable-watch-mode', 'browserify']);


gulp.task('default', ['browser-sync', 'watchify'], function(){

  $.watch(src.sass, function(){
    return gulp.start(['sass']);
  });

  $.watch(src.js, function(){
    return gulp.start(['js']);
  });

  $.watch(src.css, function(){
    return gulp.start(['css']);
  });

  $.watch(src.jekyll, function(){
    return gulp.start(['jekyll']);
  }).on('change', browserSync.reload);
});
