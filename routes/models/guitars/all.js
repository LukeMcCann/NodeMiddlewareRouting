'use strict';

const data = require('../../../dummy_database/data.json');

module.exports = (req, res) => {
    const modelId = req.params.modelId * 1;
    const guitars = data.guitars.filter(g => g.modelId === modelId);

    res.status(200).json({ guitars });
}