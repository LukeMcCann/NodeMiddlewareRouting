'use strict';

const data = require('../dummy_database/data.json');

module.exports = type => {
    return (req, res, next, value) => {
        const typePlural = `${type}s`;
        const obj = data[typePlural].find(t => t.id === (value * 1));

        if (obj) {
            req[type] = obj;
            next();
        } else {
            res.status(404).json({ status: 404, message: `Invalid ${type} ID` });
        }
    };
};