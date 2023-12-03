const express = require('express');

const controllers = require('../controller/logics')

const router = express.Router();

router.delete('/:id', controllers.deleteUser);

router.get('/:id', controllers.editUser);

router.get('/final/:id', controllers.editUser);

module.exports = router;