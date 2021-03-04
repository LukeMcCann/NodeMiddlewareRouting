'use strict';

const data = require('../../dummy_database/data.json');

module.exports = (req, res) => {
    const guitarId = req.params.guitarId * 1; 
    const guitar = data.guitars.find(g => g.id === guitarId);

    res.status(200).json({ guitar });
};