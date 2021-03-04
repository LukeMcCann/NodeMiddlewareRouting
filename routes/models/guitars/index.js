'use strict';

// Tell this router to merge parameters
// that are created on this set of routes
// with those on from it's parent(s)
const guitars = require('express').Router({ mergeParams: true });
const all = require('./all');

guitars.get('/', all);

module.exports = guitars;