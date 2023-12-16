const Users = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const generateAccessToken = (id, name) => {
    return jwt.sign({ userID: id, name: name }, 'any secret key string');
}

exports.login = (req, res, next) => {
    const data = req.body;
    console.log(data.email);
    Users.findAll({ where: { email: data.email } })
        .then(user => {
            // if user found
            if (user.length > 0) {
                // console.log(user.length);
                bcrypt.compare(data.password, user[0].password, (err, result) => {
                    if (err) {
                        console.log('err', result);
                        res.status(401).json({ message: 'Something went wrong...' });
                    }

                    if (result === true) {
                        // console.log('t', result);
                        res.json({ message: 'User Logged in Successfully', token: generateAccessToken(user[0].id, user[0].name) });
                    }
                    else {
                        // console.log('f', result);
                        res.status(401).json({ message: 'Wrong Password, Try Again' });
                    }
                })
            }
            // if user not found
            else {
                res.status(404).json({ message: 'User Not Found' });
            }
        })
        .catch(err => console.log(err));
};