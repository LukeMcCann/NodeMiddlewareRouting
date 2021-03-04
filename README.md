# Routing in Node

# Introduction

Routing is an incredibly important aspect of designing an application or API. The routing is central to the entire application, it is how our application communicates, both with internal and external resources, sending and retrieiving data. 

The structure of our routing is what the user will interact with, but it can grow, mature, and become far more complex than originally intended. This is why we need to ensure we organise our routes in a logical manner, so that errors and bugs can be quickly isolated to a single file, allowing for faster bugfixes, less downtime, and happier cients. 

# Express

This is where Express comes in. Express utilizes routers, these are essentially containers for a set of middleware, we can use this middleware on specific routes, allowing to keep each part of our routing logic in separate files, yet still allowing them to interact. 

In this project, we first se tup our basic application as normal. This includes importing the Express framework, and other modules. We then set up our index route. 

This is where our setup gets a little more interesting. Rather than simply defining all of our routes in the app.js, we can instead define routes in separate files, requiring in the routes as we see fit by using a module.export at the end of the route file. 

### app.js
<pre>
<code>
    // Import dependencies
    const app = require('express')();
    const routes = require('./routes');

    //  Connect all our routes to our application
    app.use('/', routes);

    // Listen on port 3000
    app.listen(3000, () => {
        console.log('App listening on port 3000');
    });
</code>
</pre>

### routes/index.js
<pre>
<code>
    const routes = require('express').Router();

    routes.get('/', (req, res) => {
        res.status(200).json({ message: 'Connected!' });
    });

    module.exports = routes;
</code>
</pre>

First we import Express and create a new instance of the Express Router. The Express router class is used to create modular, mountable route handlers.A router is a complete middleware and routing system in and of itself, the Express docs often refer to this as a "mini-app". 

This Router instance is stored in a variable called routes. Then a route is created at the root path of this Router which sends back a HTTP 200 status, and simple JSON message. The router is then exported. This router is then imported in the main app.js file. 

By attaching this router to our root path the callback function will be triggered when any request hits our route path. Imagine this, a user sends a request to "/". Since we have imported our routes file, and our routes file contains a endpoint for the project root path "/", the callback for the endpoint of our imported rotues file will also fire. 

### Param Middleware

Param middleware is called whenever the parameter provided is present. In this project we use this for modelId, this means that whenever a modelId is present in the URL we run our middleware, in this middleware we check for a model which has and id equal to the modelId in the URL. If there is a model we set our request model to be this model and run the next() piece of middleware, otherwise we return a 404 error code. 