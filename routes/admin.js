// import path core module
const path = require('path');

const express = require('express');

// importing exported code to get path of app.js 
// ../ -> one step up from this file's folder
const rootDir = require('../util/path');

const router = express.Router();

// for path -> /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    // rootDir -> is path of app.js which is responsible for running this app
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// for path -> /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

module.exports = router;