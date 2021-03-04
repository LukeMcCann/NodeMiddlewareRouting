'use strict';

// Create new router instance
const routes = require('express').Router();

// Create basic route showing our router is connected
routes.get('/', (req, res) => {
    res.status(200).json({ message: 'Connected!' });
});

// Export the router 
module.exports = routes;