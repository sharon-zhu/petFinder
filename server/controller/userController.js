const bcrypt = require('bcrypt');
const db = require('../models/petsDB.js');

userController = {};

userController.getAll = (req, res, next) => {
  const getAllUsers = 'select * from users';

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

/*
    input should be an object with:
        firstName
        lastName
        email
        psword
        zipcode
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
          console.log('this is the query insertUser', intoStr);
          console.log('inserted user');
          console.log(data);
          return next();
        })
        .catch((e) => {
          console.log(e.stack, 'this is the error for the query insertUser');
          return next(e);
        })
        .catch((err) => {
          console.log('error in bcrypt: ', err);
          return next(err);
        });
    })
    .catch((err) => {
      console.log('error in bcrypt: ', err);
      return next(err);
    });
};

userController.login = (req, res, next) => {
  const { email, psword } = req.body;
  const getUser = `select *from users where email = '${email}';`;
  db.query(getUser)
    .then((result) => {
      bcrypt.compare(psword, result.rows[0].psword)
        .then((bcryptResult) => {
          if (bcryptResult) {
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
