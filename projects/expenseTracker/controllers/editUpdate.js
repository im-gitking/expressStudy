const Expenses = require('../models/expense');

exports.editData = (req, res, next) => {
    const id = req.params.id;
    Expenses.findByPk(id)
    .then(expense => {
        return res.json({
            id: expense.id,
            amount: expense.amount,
            description: expense.description,
            category: expense.category
        });
    })
    .catch(err => {
        console.log(err);
    });
};

exports.updateData = (req, res, next) => {
    const data = req.body;
    const id = req.params.id;

    Expenses.findByPk(id)
    .then(expense => {
        expense.amount = data.amount;
        expense.description = data.description;
        expense.category = data.category;
        return expense.save();
    })
    .then(updatedExpense => {
        console.log(23);
        return res.json(updatedExpense);
    })
    .catch(err => {
        console.log(err);
    });
};