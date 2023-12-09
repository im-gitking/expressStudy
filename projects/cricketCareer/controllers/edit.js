const Cricketers = require('../models/cricketer');

exports.editData = (req, res, next) => {
    const id = req.body.id;
    Cricketers.findByPk(id)
        .then(player => {
            // console.log(player);
            res.json(player);
        })
        .catch(err => {
            console.log(err);
        });
}