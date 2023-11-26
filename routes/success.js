const express = require('express');

const controller = require('../controllers/contactus');

const router = express.Router();

router.post('/success', controller.postSuccess);

module.exports = router;