'use strict';

const data = require('../../dummy_database/data.json');

module.exports = (req, res) => {
    const guitars = data.guitars;

    res.status(200).json({ guitars });
}