const express = require('express');
const router = express.Router();
const petController = require('../controller/petfinderApiController.js')

//route get request to petfinder API
router.get('/:type/:location', petController.search, (req,res)=>{
  res.status(200).json(res.locals.query);
})

// after location make middleware
//res,locals.dest = req.params
module.exports = router;