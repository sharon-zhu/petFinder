const path = require('path');   
const express = require('express');
// const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, '../build')));
app.use(express.static(path.resolve(__dirname, '../client')));


// const apiRouter = require('./routes/api');
// const contentRouter = require('./routes/content')
const apiRouter = require('./router/api');

const petfinderRouter = require('./router/petfinderRouter');
app.use('/petfinder', petfinderRouter)

/**
 * parse request body
 */

// app.use(cookieParser());

/**
 * handle static files
 */



/**
 * define route handlers
 */
app.use('/api', apiRouter)


// app.use('/petFinderApi', contentRouter)

const PORT = 3000;
app.listen(PORT, console.log("listening on port: ", PORT));