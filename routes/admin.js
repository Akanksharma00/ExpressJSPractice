const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();
 
router.get('/add-product',(req, res, next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'));
});

router.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.send(`<p>Order successfully placed for ${req.body.title}</p>`);
    res.redirect('/');
    
});

module.exports = router;