const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path');

// p -> path
// err -> to catch error
// fileContent -> a buffer, to catch products.json's data
const p = path.join(rootDir, 'data', 'products.json');

// Lets create a Helper function ->
// for Reading Products from File (products.json)
// cb -> callback fucntion, that lets async readFile complete running then return value
const getAddProductsFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);
        } else {
            // as readFile method will store data as String format in 'fileContent' var
            cb(JSON.parse(fileContent));
        }
    });
}

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {
        getAddProductsFromFile(products => {
            products.push(this);
            // converting JSON to String for 'products' var
            fs.writeFile(p, JSON.stringify(products), err => {
                console.log(err);
            })
        });
    }

    // cb -> callback fucntion, that lets async readFile complete running then return value
    static fetchAll(cb) {
        getAddProductsFromFile(cb);
    }
}