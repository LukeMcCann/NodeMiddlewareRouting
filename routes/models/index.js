'use strict';

const models = require('express').Router();
const all = require('./all');
const single = require('./single');
const guitars = require('./guitars');

models.use('/:modelId/guitars', guitars);

models.get('/', all);
models.get('/:modelId', single);

module.exports = models;