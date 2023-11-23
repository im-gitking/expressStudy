// importing express
const express = require('express');

// storing Router method in router
const router = express.Router();

// use get() to get exact route to specified path
// it will be run on /admin/add-product -> (as we exported route as admihRoutes and used in app.use('/admin', adminRoutes))
router.get('/add-product', (req, res, next) => {
    console.log('In another middleware 2!!');
    res.send('<form action="/admin/add-product" method="POST"><label for="product">Product</label><input type="text" id="product" name="title"><br><lable for="size">Size</lable><input type="text" id="size" name="size"><br><button type="submit">Add Product</button></form>');
});

// accessing form data on specified path
// it will be run on /admin/add-product
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

// exporting router variable
module.exports = router;