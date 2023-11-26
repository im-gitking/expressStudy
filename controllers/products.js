const path = require('path');

const Product = require('../models/product');

const rootDir = require('../util/path');

exports.getAddProduct = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
};

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    // data returned by cb fucntion
    Product.fetchAll(products => {
        console.log(products);
        res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
    });
};