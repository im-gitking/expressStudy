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
            order: [['total_cost', 'DESC']]
        });

        // console.log(leaders);

        res.status(201).json(leaders);
    }
    catch (err) {
        console.log(err);
    }
};