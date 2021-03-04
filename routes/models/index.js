'use strict';

const models = require('express').Router();
const all = require('./all');
const single = require('./single');
const guitars = require('./guitars');

const data = require('../../dummy_database/data.json');

// Add param middleware to the Router
models.param('modelId', (req, res, next, value) => {
    const model = data.models.find(m => m.id === (value * 1));

    if (model) {
        req['model'] = model;
        next();
    } else {
        res.status(404).json({ status: 404, message: 'Invalid model ID' });
    }
});

models.use('/:modelId/guitars', guitars);

models.get('/', all);
models.get('/:modelId', single);

module.exports = models;