const expense = require('express');

const editUpdateController = require('../controllers/editUpdate');

const router = expense.Router();

router.post('/:id', editUpdateController.updateData);

module.exports = router;