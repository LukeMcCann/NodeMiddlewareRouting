'use strict';

const app = require('express')();
require('dotenv').config();

const port = process.env.PORT || 3000;

// Require routes
const routes = require('./routes');

// Attach routes middleware
app.use('/', routes);

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});