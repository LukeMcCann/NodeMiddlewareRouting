'use strict';

// Create new router instance
const routes = require('express').Router();

// Require routes
const models = require('./models');
const guitars = require('./guitars');

routes.use('/models', models);
routes.use('/guitars', guitars);

// Create basic route showing our router is connected
routes.get('/', (req, res) => {
    res.status(200).json({ message: 'Connected!' });
});

// Export the router 
module.exports = routes;