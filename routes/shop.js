const express = require('express');

const router = express.Router();

// use .get() to get exact match of path
router.get('/', (req, res, next) => {
    console.log('In another middleware 3!!');
    res.send('<h1>Hello from Express!!</h1>');
});

module.exports = router;