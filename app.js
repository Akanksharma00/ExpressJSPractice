// Node core module import
// const http = require('http');

// Node third party module import
const express = require('express');

const app = express();

app.use((req, res, next)=>{
    console.log('In the middleware!');
    next(); //Allows the request  to continue to the next middleware in line
});

app.use((req, res, next)=>{
    console.log('In the second middleware!');
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(4000);