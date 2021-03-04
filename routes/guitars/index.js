'use strict';

const guitars = require('express').Router();
const all = require('./all');
const single = require('./single');

guitars.get('/', all);
guitars.get('/:guitarId', single);

module.exports = guitars;