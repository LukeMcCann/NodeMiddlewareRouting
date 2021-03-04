'use strict';

const data = require('../../dummy_database/data.json');

module.exports = (req, res) => {
    // Coerce from string to integer
    const modelId = req.params.modelId * 1;
    const model = data.models.find(m => m.id === modelId);

    res.status(200).json({ model });
};