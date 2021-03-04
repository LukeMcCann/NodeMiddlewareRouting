'use strict';

const guitars = require('express').Router();
const all = require('./all');
const single = require('./single');

const data = require('../../dummy_database/data.json');
const models = require('../models');

guitars.param('guitarId', (req, res, next, value) => {
    const guitar = data.guitars.find(g => g.id === (value * 1));

    if (guitar) {
        req['model'] = guitar;
        next();
    } else {
        res.status(404).json({ status: 404, message: 'Invalid guitar ID'});
    }
});

guitars.get('/', all);
guitars.get('/:guitarId', single);

module.exports = guitars;