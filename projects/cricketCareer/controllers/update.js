const Cricketers = require('../models/cricketer');

exports.updateData = (req, res, next) => {
    const data = req.body;
    const id = req.params.id;

    Cricketers.findByPk(id)
        .then(player => {
            // console.log(player);
            player.name = data.name;
            player.dob = data.dob;
            player.photo = data.photo;
            player.birthplace = data.birthplace;
            player.career = data.career;
            player.numberOfMatches = data.numberOfMatches;
            player.score = data.score;
            player.fifties = data.fifties;
            player.centuries = data.centuries;
            player.wickets = data.wickets;
            player.avarage = data.avarage;
            return player.save();
        })
        .then(result => {
            return res.json({ status: 'Success' });
        })
        .catch(err => {
            console.log(err);
        });
}