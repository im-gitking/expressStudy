const Users = require('../models/users');

exports.signup = (req, res, next) => {
    const data = req.body;
    console.log(data.email);
    Users.findAll({where: { email: data.email }})
        .then(user => {
            // if user found
            if(user) {
                return null;
            }
            // if user not found
            else {
                return Users.create(data);
            }
        })
        .then(user => {
            if(!user) {
                return res.status(302).json(user);
            }
            res.json(user);
        })
        .catch(err => console.log(err));
};