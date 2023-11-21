const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/', (req, res, next) => {
    console.log('In another middleware!!');
    next();
});

app.use('/add-product', (req, res, next) => {
    console.log('In another middleware 2!!');
    res.send('<form action="/product" method="POST"><label for="product">Product</label><input type="text" id="product" name="title"><br><lable for="size">Size</lable><input type="text" id="size" name="size"><br><button type="submit">Add Product</button></form>');
});

app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

app.use('/', (req, res, next) => {
    console.log('In another middleware 3!!');
    res.send('<h1>Hello from Express!!</h1>');
});

app.listen(3000);