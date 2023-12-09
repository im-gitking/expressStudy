const Cricketers = require('../models/cricketer');

exports.insertData = (req, res, next) => {
    const data = req.body;

    Cricketers.create({
        name: data.name,
        dob: data.dob,
        photo: data.photo,
        birthplace: data.birthplace,
        career: data.career,
        numberOfMatches: data.numberOfMatches,
        score: data.score,
        fifties: data.fifties,
        centuries: data.centuries,
        wickets: data.wickets,
        avarage: data.avarage
    })
    .then(crickter => {
        res.json(crickter);
    })
    .catch(err => {
        console.log(err);
    });
};