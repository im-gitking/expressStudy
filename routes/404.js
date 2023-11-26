const express = require('express');

const controller = require('../controllers/404.js');

const router = express.Router();

router.use(controller.errorController);

module.exports = router;