'use strict';

const gulp = require('gulp'),
sass = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer'),
cssnano = require('gulp-cssnano'),
babel = require('gulp-babel'),
minify = require('gulp-babel-minify'),
browserSync = require('browser-sync');

const server = browserSync.create();

const paths = {
	style: {
		src: './app/scss/*.scss',
		dest: './app/css'
	},
	script: {
		src: './app/js/*.js',
		dest: './app/js/min'
	},
	html: {
		src: './app/*.html'
	}
};

function styleStream() {
	return gulp.src(paths.style.src)
	.pipe(sass())
	.pipe(cssnano())
	.pipe(autoprefixer({
		grid: true,
		browsers: ['last 5 versions'],
		cascade: false
	}))
	.pipe(gulp.dest(paths.style.dest))
	.pipe(browserSync.reload({
		stream: true
	}));
}

function scriptStream() {
	return gulp.src(paths.script.src)
	.pipe(babel({
		presets: ['@babel/env']
	}))
	.pipe(minify({
		mangle: {
			keepClassName: true,
			comments: false
		}
	}))
	.pipe(gulp.dest(paths.script.dest))
	.pipe(browserSync.reload({
		stream: true
	}));
}

function reload(done) {
  server.reload();
  done();
}

function serve(done) {
  server.init({
    server: {
      baseDir: './app'
    }
  });
  done();
}

function watchFile() {
	gulp.watch(paths.style.src, gulp.series(styleStream, reload));
	gulp.watch(paths.script.src, gulp.series(scriptStream, reload));
	gulp.watch(paths.html.src, gulp.series(reload));
}

gulp.task('default', gulp.series(serve, watchFile));
