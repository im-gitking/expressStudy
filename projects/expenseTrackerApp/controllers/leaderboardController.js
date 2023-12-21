const Users = require('../models/users');
const Expenses = require('../models/expense');
const sequelize = require('../util/database');

exports.leaderboard = async (req, res, next) => {
    try {
        const leaders = await Users.findAll({
            attributes: ['id', 'name', [sequelize.fn('sum', sequelize.col('expenseamount')), 'total_cost']],
            include: [
                {
                    model: Expenses,
                    attributes: []
                }
            ],
            group: ['user.id'],
            order: ['total_cost', 'DESC']
        });

        console.log(leaders);
        // const leaderObject = [];
        // let postion = 0;

        // // users.forEach(user => {
        // for(let i = users.length; i > 0; i--) {
        //     let totalAmount = 0;
        //     expenses.forEach(expense => {
        //         if (users[i-1].id === expense.userId) {
        //             totalAmount += expense.expenseamount;
        //         }
        //     })
        //     leaderObject.push({ postion: ++postion, name: users[i-1].name, amount: totalAmount });
        // }

        // res.status(201).json(leaderObject);
    }
    catch (err) {
        console.log(err);
    }
};