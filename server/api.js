const express = require('express');
const router = express.Router();
const petController = require('./controller.js');



router.post('/', 
    itemController.createItem, 
  (req, res)=>{
    
  }
)

router.get('/', 
    itemController.readItem, 
  (req, res)=>{
    
  }
)

router.put('/', 
    itemController.updateItem, 
    (req, res)=>{
        
    }
)

router.delete('/', 
    itemController.deleteItem, 
    (req, res)=>{
        
    }
)

module.exports = router;