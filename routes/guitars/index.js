'use strict';

const guitars = require('express').Router();
const all = require('./all');
const single = require('./single');
const findObject = require('../../utils/findObject');

guitars.get('/', all);
guitars.get('/:guitarId', single);

guitars.param('guitarId', findObject('guitar'));

module.exports = guitars;
