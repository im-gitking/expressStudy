const Users = require('../models/users');
const Expenses = require('../models/expense');

exports.leaderboard = async (req, res, next) => {
    try {
        const users = await Users.findAll();
        const expenses = await Expenses.findAll();
        const leaderObject = [];
        let postion = 0;

        // users.forEach(user => {
        for(let i = users.length; i > 0; i--) {
            let totalAmount = 0;
            expenses.forEach(expense => {
                if (users[i-1].id === expense.userId) {
                    totalAmount += expense.expenseamount;
                }
            })
            leaderObject.push({ postion: ++postion, name: users[i-1].name, amount: totalAmount });
        }

        res.status(201).json(leaderObject);
    }
    catch (err) {
        console.log(err);
    }
};