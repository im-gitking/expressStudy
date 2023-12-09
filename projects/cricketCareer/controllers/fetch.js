const Cricketers = require('../models/cricketer');

exports.fetchData = (req, res, next) => {
    const name = req.body.name;
    Cricketers.findAll({ where: { name: name } })
        .then(player => {
            console.log(player);
            res.json(player);
        })
        .catch(err => {
            console.log(err);
        });
}