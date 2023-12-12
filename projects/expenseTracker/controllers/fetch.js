const Expenses = require('../models/expense');

exports.fetchData = (req, res, next) => {
    Expenses.findAll()
    .then(expenses => {
        res.json(expenses);
    })
    .catch(err => {
        console.log(err);
    });
};
