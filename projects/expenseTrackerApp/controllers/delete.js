const Expenses = require('../models/expense');

exports.deleteData = (req, res, next) => {
    const id = req.params.id;
    Expenses.findByPk(id)
    .then(expense => {
        expense.destroy();
        return res.json({status: 'success'});
    })
    .catch(err => {
        console.log(err);
    });
};