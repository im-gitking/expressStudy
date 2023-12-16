const express = require('express');

const expenseController = require('../controllers/expenseController')

const router = express.Router();

router.post('/addExpense', expenseController.postExpense);
router.get('/addExpense', expenseController.getExpense);
router.delete('/addExpense/:id', expenseController.deleteExpense);

module.exports = router;