const Users = require('../models/users');
const jwt = require('jsonwebtoken');

exports.authenticate = async(req, res, next) => {
    try {
        const token = req.header('Authorization');
        // console.log(token);
        const userDetails = jwt.verify(token, 'any secret key string');
        console.log(userDetails);
        const user = await Users.findByPk(userDetails.userID)
        req.user = user;
        next();
    }
    catch(err) {
        console.log(err);
    }
}