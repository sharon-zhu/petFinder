const path = require('path');   
const express = require('express');
const { v4: uuid } = require('uuid');
const session = require('express-session');

const app = express();

const apiRouter = require('./router/api');
const petfinderRouter = require('./router/petfinderRouter');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

/**
 * 
 * secret is set for development and testing
 * 
 * Notes: Session generates a cookie with a default name connect.sid
 * which maintains the session.  Tampering with the cookie invalidates 
 * the current session.
 * 
 * Session is set (activated) during the login process in the
 * userController.login function with session.uid = _id (the users _id)
 * from the postgresql db.
 *  * 
 */
app.use(session({
  genid: function(req) {
    return uuid() // use UUIDs for session IDs
  },
  secret:'dogs and cats', 
  resave: false,
  saveUninitialized: false,
  cookie:{secure:false}
}));

app.use(express.static(path.resolve(__dirname, '../build')));
app.use(express.static(path.resolve(__dirname, '../client')));

app.use('/api', apiRouter);
app.use('/petfinder', petfinderRouter);
// app.get('/', (req, res) => {  
//   res.status(200);
//   res.sendFile(path.resolve(__dirname, '../client/index.html'));
// });

const PORT = 3000;
app.listen(PORT, console.log("listening on port: ", PORT));