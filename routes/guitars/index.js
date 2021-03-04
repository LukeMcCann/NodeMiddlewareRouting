'use strict';

const guitars = require('express').Router();
const all = require('./all');
const single = require('./single');

const data = require('../../dummy_database/data.json');
const findObject = require('../../utils/findObject');
const models = require('../models');

guitars.param('guitarId', findObject('guitar'));

guitars.get('/', all);
guitars.get('/:guitarId', single);

module.exports = guitars;