const router = require('express').Router();
const productModel = require('../models/productModel.js');

router.post('/api/product', async (req, res)=> {
    try {
        const newItem=new productModel({
           item: req.body.item
        })
        const saveItem=await newItem.save()
        res.status(200).json(saveItem)
        
    } catch (err) {
        res.json(err);
        
    }
})
module.exports = router;