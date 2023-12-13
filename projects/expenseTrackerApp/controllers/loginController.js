const Users = require('../models/users');

exports.login = (req, res, next) => {
    const data = req.body;
    console.log(data.email);
    Users.findAll({ where: { email: data.email } })
        .then(user => {
            // if user found
            if (user.length > 0) {
                // console.log(user.length);
                if(user[0].password === data.password) {
                    res.json({message: 'User Logged in Successfully'});
                }
                else {
                    res.json({message: 'Wrong Password, Try Again'});
                }
            }
            // if user not found
            else {
                res.status(404).json({message: 'User Not Found'});
            }
        })
        .catch(err => console.log(err));
};