const express = require('express');
const router = express.Router();

const userController = require('../controller/userController');

router.get('/users', userController.getAll, (req, res)=> {
  console.log('in / of /api')
  res.header('content-type', 'text/html; charset=utf-8'); // maybe put application/json
  return res.status(200).send('check the console');
});

/*
  1) insert into db (in controller)

*/
router.post('/signup', 
  userController.insertUser,
    (req, res)=> {
    console.log('user sucessfully registered account')
    res.header('content-type', 'application/json'); // maybe put application/json
    return res.status(200).send('check the console');
});

router.post('/login',
  userController.login,
  (req, res)=> {
  let uid = req.session.uid
  console.log('this session: ', req.session)
  console.log('this uid?: ', req.session.uid)
  
  console.log('user sucessfully logged in account')
  res.header('content-type', 'application/json'); // maybe put application/json
  return res.status(200).send('check the console');
});

module.exports = router;