const express = require('express');
const path = require('path');

const Router = express.Router();

Router.get('/dashboard', (req,res, next) => {
    res.sendFile(path.join(__dirname, '../' , 'views', 'index.html'))
})

Router.post('/posts', (req, res, next) => {
    console.log(req.body);
    res.send(req.body)
})

module.exports = Router;