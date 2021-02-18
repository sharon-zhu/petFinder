const path = require('path');   
const express = require('express');
const { v4: uuid } = require('uuid');
// const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();

// const apiRouter = require('./routes/api');
// const contentRouter = require('./routes/content')
const apiRouter = require('./router/api');
const petfinderRouter = require('./router/petfinderRouter');


/**
 * parse request body
 */
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(cookieParser());

/**
 * secret is set for development and testing
 */
app.use(session({
  genid: function(req) {
    return uuid() // use UUIDs for session IDs
  },
  secret:'dogs and cats', 
  resave: false,
  saveUninitialized: false,
  cookie:{secure:false}}))

/**
 * handle static files
 */
app.use(express.static(path.resolve(__dirname, '../build')));
app.use(express.static(path.resolve(__dirname, '../client')));


/**
 * define route handlers
 */

app.use('/api', apiRouter);
app.use('/petfinder', petfinderRouter);
app.get('/', (req, res) => {  res.status(200);
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});


// app.use('/petFinderApi', contentRouter)

const PORT = 3000;
app.listen(PORT, console.log("listening on port: ", PORT));