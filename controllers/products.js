const path = require('path');

const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
};

exports.postAddProduct = (req, res, next) => {
    const product = new Product(res.body.title);
    product.save();
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll();
};