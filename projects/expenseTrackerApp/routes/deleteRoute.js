const expense = require('express');

const deleteController = require('../controllers/delete');

const router = expense.Router();

router.delete('/:id', deleteController.deleteData);

module.exports = router;