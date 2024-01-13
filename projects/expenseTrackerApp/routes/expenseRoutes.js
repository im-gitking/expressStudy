const express = require('express');

const userAuthentecation = require('../middelware/auth')

const expenseController = require('../controllers/expenseController')
const paginationController = require('../controllers/paginationController')

const router = express.Router();

router.post('/addExpense', userAuthentecation.authenticate, expenseController.postExpense);
// router.get('/addExpense', userAuthentecation.authenticate, expenseController.getExpense);
router.delete('/addExpense/:id', userAuthentecation.authenticate, expenseController.deleteExpense);
router.get('/download', userAuthentecation.authenticate, expenseController.downloadExpense);
router.get('/pagination', userAuthentecation.authenticate, paginationController.pagination);

module.exports = router;