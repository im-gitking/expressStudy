// importing path core module
const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    // sendFile() sends html file as output -> it only takes absolute path
    // so we are importing path core module, using path.join()
    // join() will detect OS and automatically builds correct path with given arguments to serve
    // where argument __dirname is absolute path to this file's folder
    // ../ or .. -> both means 'up one level' as routes and views both are sybling folder here
    res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
});

module.exports = router;