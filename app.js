// Node core module import
// const http = require('http');

// Node third party module import
const express = require('express');
const bodyParser = require('body-parser');

//Import my own files
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes);

app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page Not Found!</h1>');
});

app.listen(4000);