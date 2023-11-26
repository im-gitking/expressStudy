const express = require('express');

const router = express.Router();

const controller = require('../controllers/contactus');

router.get('/contactus', controller.contactusController);

module.exports = router;