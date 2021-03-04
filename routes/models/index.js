'use strict';

const models = require('express').Router();
const all = require('./all');
const single = require('./single');
const guitars = require('./guitars');

const findObject = require('../../utils/findObject');

const data = require('../../dummy_database/data.json');

// Add param middleware to the Router
models.param('modelId', findObject('model'));

models.use('/:modelId/guitars', guitars);

models.get('/', all);
models.get('/:modelId', single);

module.exports = models;