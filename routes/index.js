'use strict';

// Create new router instance
// The Router is the container for the middleware
// on this route.
const routes = require('express').Router();
const models = require('./models');

// Attach the model routes to the main Router
routes.use('/models', models);

// Create basic route showing our router is connected
routes.get('/', (req, res) => {
    res.status(200).json({ message: 'Connected!' });
});

// Export the router 
// in app.js we import this module, as
// you can see we are exporting the Router object.
module.exports = routes;

/**
 * In doing so the middleware attached to this Router will be run
 * so long as the incoming request is to the root path.
 */