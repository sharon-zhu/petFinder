const express = require('express');
const router = express.Router();

const userController = require('../controller/userController');

/**
 * This route is for testing the db
 */
router.get('/users', 
  userController.getAll, 
  (req, res)=> {
    res.header('content-type', 'text/html; charset=utf-8'); 
    return res.status(200).send('check the console');
});

/**
 * Creates new users and redirects to homepage
 * 
 */
router.post('/signup', 
  userController.insertUser,
    (req, res)=> {
      res.header('content-type', 'application/json'); 
      //redirect to the correct page here
      return res.status(200).send('check the console');
});
/**
 * 
 */
router.post('/login',
  userController.login,
  (req, res)=> {  
  res.header('content-type', 'application/json');
  //redirect to the correct page here
  return res.status(200).send('check the console');
});

module.exports = router;