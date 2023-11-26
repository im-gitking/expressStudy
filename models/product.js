const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path');

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {
        const p = path.join(rootDir, 'data', 'products.json');
        // p -> path
        // err -> to catch error
        // fileContent -> a buffer, to catch products.json's data
        fs.readFile(p, (err, fileContent) => {
            let products = [];
            if (!err) {
                // as readFile method will store data as String format in 'fileContent' var
                products = JSON.parse(fileContent);
            }
            products.push(this);
            // storing JSON as String
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }

    // fetchAll method returns a array
    // cb -> callback fucntion, that lets async readFile complete running then return value
    static fetchAll(cb) {
        const p = path.join(rootDir, 'data', 'products.json');
        fs.readFile (p, (err, fileContent) => {
            if (err) {
                cb ([]);
            }
            cb (JSON.parse(fileContent));
        });
    }
}