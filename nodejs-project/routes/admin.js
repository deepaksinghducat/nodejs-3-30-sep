const express = require('express');

// Controllers
const ProfileController = require('../controller/admin/ProfileController');
const OrderController = require('../controller/admin/OrderController');
const ProductController = require('../controller/admin/ProductController');
const UserController = require('../controller/admin/UserController');
const RoleController = require('../controller/admin/RoleController');

const Router = express.Router();

// Profile
Router.get('/profile', ProfileController.getProfile);

// Orders
Router.get('/orders', OrderController.getOrders);

Router.get('/order/view/:id', OrderController.viewOrder);

// Product
Router.get('/products', ProductController.getProducts);

Router.get('/product/create', ProductController.createProduct);

Router.post('/products', ProductController.storeProduct);

Router.get('/product/edit/:id', ProductController.editProduct);

Router.post('/product/update', ProductController.updateProduct);

Router.delete('/product/delete', ProductController.deleteProduct);

// user
Router.get('/users', UserController.getUsers);

Router.get('/user/create', UserController.createUser);

Router.post('/users', UserController.storeUser);

Router.get('/user/edit/:id', UserController.editUser);

Router.post('/user/update', UserController.updateUser);

Router.delete('/user/delete', UserController.deleteUser);

// Roles
Router.get('/roles', RoleController.getRoles);

Router.get('/role/create', RoleController.createRole);

Router.post('/roles', RoleController.storeRole);

Router.get('/role/edit/:id', RoleController.editRole);

Router.post('/role/update', RoleController.updateRole);

Router.delete('/role/delete', RoleController.deleteRole);

module.exports = Router;