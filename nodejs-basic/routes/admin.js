const express = require('express');
const path = require('path');

const Router = express.Router();

Router.get('/dashboard', (req,res, next) => {
    // res.sendFile(path.join(__dirname, '../' , 'views', 'index.html'))

    let title = 'Dashboard1';

    let array = [10,20,30,40,50,60,70,80,90];

    res.render('index', {title, array})
})

Router.post('/posts', (req, res, next) => {
    console.log(req.body);
    res.send(req.body)
})

module.exports = Router;