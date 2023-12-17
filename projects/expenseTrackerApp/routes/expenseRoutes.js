const express = require('express');
const jwt = require('jsonwebtoken');


const userAuthentecation = require('../middelware/auth')
const expenseController = require('../controllers/expenseController')

const router = express.Router();

router.post('/addExpense', userAuthentecation.authenticate, expenseController.postExpense);
router.get('/addExpense', userAuthentecation.authenticate, expenseController.getExpense);
router.delete('/addExpense/:id', userAuthentecation.authenticate, expenseController.deleteExpense);

module.exports = router;