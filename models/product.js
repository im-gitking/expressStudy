const fs = require('fs');
const path = require('path');
<<<<<<< HEAD

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    this.id = Math.random().toStrong();
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static findById(id, cd) {
    getProductsFromFile(products => {
      const product = products.find(p => p.id === id);
      cb(product);
    });
  }
};
=======
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
>>>>>>> dd67458780327b4cf23cfa944dce14267ac7cacd
