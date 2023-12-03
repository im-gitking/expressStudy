const Expenses = require('../models/expense');

exports.insertData = (req, res, next) => {
    const data = req.body;

    Expenses.create({
        amount: data.amount,
        description: data.description,
        category: data.category
    })
    .then(expense => {
        res.json(expense);
    })
    .catch(err => {
        console.log(err);
    });
};