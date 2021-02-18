const express = require('express');
const path = require('path');

const app = express();
// const PORT = 3000;

// parser to json object
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serving static files
app.use(express.static(path.resolve(__dirname, '../build')));
app.use(express.static(path.resolve(__dirname, '../client')));

// connecting to routers
const dbRouter = require('./router/dbRouter');
const petfinderRouter = require('./router/petfinderRouter');

app.use('/db', dbRouter);
app.use('/petfinder', petfinderRouter);

// serve index.html file
app.get('/', (req, res) => {
  res.status(200);
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

// catching all other requests to unknown routes
app.use('*', (req, res) => res.status(404).send('No Pet Information found on this page! :('));

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// listening on port:
// app.listen(PORT, () => {
//   console.log(`Server listening on port: ${PORT}...`);
// });

module.export = app;
