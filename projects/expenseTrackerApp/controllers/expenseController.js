const Expenses = require('../models/expense');

exports.postExpense = (req, res, next) => {
    const data = req.body;
    console.log(data);
    // console.log(req.user);
    req.user.createExpense(data)
        .then(expense => {
            req.user.totalExpense += data.expenseamount;
            req.user.save();
            return expense;
        })
        .then(expense => {
            res.json(expense);
        })
        .catch(err => console.log(err));
};

exports.getExpense = (req, res, next) => {
    req.user.getExpenses()
        .then(expenses => {
            // console.log(req.user.totalExpense);
            return res.json(expenses);
        })
        .catch(err => console.log(err));
};

exports.deleteExpense = (req, res, next) => {
    const expenseId = req.params.id;
    let expenseAmount = 0;

    Expenses.findByPk(expenseId)
        .then(expense => {
            expenseAmount = expense.expenseamount;
            expense.destroy();
        })
        .then(response => {
            req.user.totalExpense -= expenseAmount;
            req.user.save();
        })
        .then(user => {
            res.json(user);
        })
        .catch(err => console.log(err));
};