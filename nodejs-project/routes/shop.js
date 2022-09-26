const express = require('express');
const ShopController = require('../controller/shop/ShopController');

const Router = express.Router();

// home
Router.get('/', ShopController.home);

// Product View
Router.get('/:slug', ShopController.viewProduct);

module.exports = Router;