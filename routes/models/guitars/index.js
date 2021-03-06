'use strict';

// Merge params: true tells the router to merge
// the parameters created on this set of routes
// with that of its parents.
const guitars = require('express').Router({ mergeParams: true });
const all = require('./all');

guitars.get('/', all);

module.exports = guitars;