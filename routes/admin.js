// import path core module
const path = require('path');

const express = require('express');

const productController = require('../controllers/products');

const router = express.Router();

// for path -> /admin/add-product => GET
router.get('/add-product', productController.getAddProduct);

// for path -> /admin/add-product => POST
router.post('/add-product', productController.postAddProduct)

module.exports = router;