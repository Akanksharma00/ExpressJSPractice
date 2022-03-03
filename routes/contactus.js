const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/contactus',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contactUs.html'));
});

router.post('/success',(req,res,next)=>{
    res.send('Form successfully filled');
});

module.exports = router;