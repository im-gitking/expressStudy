const express = require('express');
const productController = require('../controllers/products');
const rootDir = require('../util/path');

const router = express.Router();

router.get('/', productController.getProducts);

module.exports = router;