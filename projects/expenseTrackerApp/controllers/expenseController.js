const Expenses = require('../models/expense');
const sequelize = require('../util/database');

exports.postExpense = async (req, res, next) => {
    const t = await sequelize.transaction();
    try {
        const data = req.body;
        const expense = await req.user.createExpense(data, { transaction: t });

        req.user.totalExpense += data.expenseamount;
        await req.user.save({ transaction: t });

        await t.commit();
        res.json(expense);
    }
    catch (err) {
        await t.rollback();
        console.log(err);
    }
};

exports.getExpense = (req, res, next) => {
    req.user.getExpenses()
        .then(expenses => {
            // console.log(req.user.totalExpense);
            return res.json(expenses);
        })
        .catch(err => console.log(err));
};

exports.deleteExpense = async (req, res, next) => {
    const t = await sequelize.transaction();
    try {
        const expenseId = req.params.id;
        const expense = await Expenses.findByPk(expenseId, { transaction: t });

        await expense.destroy({ transaction: t });

        req.user.totalExpense -= expense.expenseamount;
        await req.user.save({ transaction: t });

        await t.commit();
        res.json('SUCCESS');
    }
    catch (err) {
        await t.rollback();
        console.log(err);
    }
};