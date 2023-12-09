const Cricketers = require('../models/cricketer');

exports.insertData = (req, res, next) => {
    const data = req.body;
    console.log(1, 2);

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
    .then(cricketer => {
        console.log(cricketer);
        res.json(cricketer);
    })
    .catch(err => {
        console.log(err);
    });
};