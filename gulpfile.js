'use strict';

var gulp = require('gulp');
var viacoreTasks = require('viacore-build');

viacoreTasks('p2p', {skipBrowser: true});

gulp.task('default', ['lint', 'coverage']);
