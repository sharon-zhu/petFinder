const express = require('express');
const router = express.Router();
const itemController = require('../controller/petControllers.js');

//responding to post request to add new item to DB
router.post('/', 
  itemController.createItem, 
  (req, res) => {
    res.status(200).json({});
  }
);

//responding to get request to get all items in DB
router.get('/', 
  itemController.readItem, 
  (req, res) => {
    res.status(200).json(res.locals.query);
  }
);

// router.put('/', 
//   itemController.updateItem, 
//     req, res)=>{
        
//   }
// )

//responding to delete request to remove item from DB
router.delete('/', 
    itemController.deleteItem, 
    (req, res)=>{
      res.status(200).json({});
    }
)

module.exports = router;