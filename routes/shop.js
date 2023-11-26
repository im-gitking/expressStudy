<<<<<<< HEAD
const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

// /products/1234...or..anything
router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

module.exports = router;
=======
const express = require('express');
const productController = require('../controllers/products');
const rootDir = require('../util/path');

const router = express.Router();

router.get('/', productController.getProducts);

module.exports = router;
>>>>>>> dd67458780327b4cf23cfa944dce14267ac7cacd
