'use strict';

const app = require('express')();
require('dotenv').config();

const routes = require('./routes');

const port = process.env.PORT || 3000;

// Attach routes middleware
app.use('/', routes);

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});