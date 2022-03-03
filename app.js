// Node core module import
// const http = require('http');

// Node third party module import
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//Import my own files
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactUsRoutes = require('./routes/contactus');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.use(adminRoutes);

app.use(shopRoutes);

app.use(contactUsRoutes);

app.use((req,res,next)=>{
    // res.status(404).send('<h1>Page Not Found!</h1>');
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});

app.listen(4000);