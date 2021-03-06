'use strict';

const data = require('../../dummy_database/data.json');

module.exports = (req, res) => {
    const models = data.models;

    res.status(200).json({ models });
};