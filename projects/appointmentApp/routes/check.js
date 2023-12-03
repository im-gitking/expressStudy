const express = require('express');

const controllers = require('../controller/logics')

const router = express.Router();

router.get('/', controllers.getLogics);

router.post('/', controllers.postLogics);

module.exports = router;