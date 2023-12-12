const expense = require('express');

const editUpdateController = require('../controllers/editUpdate');

const router = expense.Router();

router.get('/:id', editUpdateController.editData);

module.exports = router;