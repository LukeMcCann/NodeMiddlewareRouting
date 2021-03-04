'use strict';

const data = require('../../dummy_database/data.json');

// Here we grab our models from our data.json
// We then create an anonymous rotue which 
// is directly exported, after returning
// the models. These mmodels are connected
// within our routes/index.js.
module.exports = (req, res) => {
    const models = data.models;

    res.status(200).json({ models });
}