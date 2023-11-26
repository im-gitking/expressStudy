<<<<<<< HEAD
=======
// import path core module
>>>>>>> dd67458780327b4cf23cfa944dce14267ac7cacd
const path = require('path');

const express = require('express');

<<<<<<< HEAD
const adminController = require('../controllers/admin');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/products => GET
router.get('/products', adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

module.exports = router;
=======
const productController = require('../controllers/products');

const router = express.Router();

// for path -> /admin/add-product => GET
router.get('/add-product', productController.getAddProduct);

// for path -> /admin/add-product => POST
router.post('/add-product', productController.postAddProduct)

module.exports = router;
>>>>>>> dd67458780327b4cf23cfa944dce14267ac7cacd
