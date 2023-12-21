const Expenses = require('../models/expense');

exports.postExpense = (req, res, next) => {
    const data = req.body;
    console.log(data);
    // console.log(req.user);
    req.user.createExpense(data)
        .then(expense => {
            res.json(expense);
        })
        .catch(err => console.log(err));
};

exports.getExpense = (req, res, next) => {
    req.user.getExpenses()
        .then(expenses => {
            // console.log(expenses);
            return res.json(expenses);
        })
        .catch(err => console.log(err));
};

exports.deleteExpense = (req, res, next) => {
    const expenseId = req.params.id;
    // console.log(expenseId);
    Expenses.findByPk(expenseId)
        .then(expense => {
            expense.destroy();
            res.json(expense);
        })
        .catch(err => console.log(err));
};