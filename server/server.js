const path = require('path');   
const express = require('express');
// const cookieParser = require('cookie-parser');

const app = express();

// const apiRouter = require('./routes/api');
// const contentRouter = require('./routes/content')
const apiRouter = require('./router/api');

/**
 * parse request body
 */
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(cookieParser());

/**
 * handle static files
 */
app.use(express.static(path.resolve(__dirname, '../build')));


/**
 * define route handlers
 */
app.use('/api', apiRouter)


// app.use('/petFinderApi', contentRouter)

const PORT = 3000;
app.listen(PORT, console.log("listening on port: ", PORT));