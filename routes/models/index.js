'ust strict';

const models = require('express').Router();
const all = require('./all');
const single = require('./single');
const guitars = require('./guitars');
const findObject = require('../../utils/findObject');

models.use('/:modelId/guitars', guitars);

models.get('/', all);
models.get('/:modelId', single);

models.param('modelId', findObject('model'));

module.exports = models;