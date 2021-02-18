const bcrypt = require('bcrypt');
const db = require('../models/petsDB.js');

const userController = {};

/**
 *  Author: Anthony Martinez
 *  Date: 16 Feb, 2021
 *
 *  getAll() is used for testing accessability to routes
 *  and to validate the user db. Only use during development.
 *
 *  Input: n/a
 *  Output: all users in the users db
 *
 *  TODO: Remove for production
 */
userController.getAll = (req, res, next) => {
  const getAllUsers = 'select * from users';
  if (!req.session.uid) {
    // send message to the front end here.
    return res.redirect('/');
  }
  db.query(getAllUsers)
    .then((data) => {
      console.log('get all query response ', data.rows);
      return next();
    })
    .catch((e) => {
      console.error(e.stack);
      return next(e);
    });
};

/**
 *  Author: Anthony Martinez
 *  Date: 16 Feb, 2021
 *
 *  insertUser() will insert a new user into the users table.
 *  Input: {firstName, lastName, email, psword, zipcode}
 *  Output: returns next()
 */
userController.insertUser = (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    psword,
    zipcode,
  } = req.body;

  const saltRounds = 10;
  bcrypt.hash(psword, saltRounds)
    .then((result) => {
      const intoStr = `insert into users (firstName, lastName, email, psword, zipcode) values 
                        ('${firstName}','${lastName}','${email}','${result}','${zipcode}');`;
      db.query(intoStr)
        .then((data) => {
          console.log('Query insertUser:', intoStr);
          console.log(data);
          return next();
        })
        .catch((e) => {
          console.log(e.stack, 'this is the error for the query insertUser');
          return next(e);
        });
    })
    .catch((err) => {
      console.log('error in bcrypt: ', err);
    });
};
/**
 *  Author: Anthony Martinez
 *  Date: 16 Feb, 2021
 *
 *  Input: {email, psword}
 *  Output: returns next()
 *
 */
userController.login = (req, res, next) => {
  const { email, psword } = req.body;
  const getUser = `select *from users where email = '${email}';`;
  db.query(getUser)
    .then((result) => {
      bcrypt.compare(psword, result.rows[0].psword)
        .then((bcryptResult) => {
          if (bcryptResult) {
            // set uid in the session
            req.session.uid = result.rows[0]._id;
            return next();
          }
          throw 'wrong email or password';
        })
        .catch((err) => {
          console.log('error in bcrypt compare: ', err);
          return next(err);
        });
    })
    .catch((err) => {
      console.log('error in login query', err);
      return next(err);
    });
};

userController.getFavs = (req, res, next) => {
  const { email } = req.body;
  const values = [email];
  const getUserFavs = 'SELECT pet_id from petList LEFT OUTER JOIN users on petList.user_id = users._id WHERE users.email = $1';
  db.query(getUserFavs, values)
    .then((data) => {
      const { rows } = data;
      res.locals.favs = rows;
      next();
    })
    .catch((err) => {
      console.log('error in getting user favs: ', err);
    });
};

module.exports = userController;
