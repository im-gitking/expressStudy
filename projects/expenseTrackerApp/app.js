const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const env = require('dotenv').config();

// Routes require
const sequelize = require('./util/database');
const signupRoutes = require('./routes/signupRoutes');
const loginRoutes = require('./routes/loginRoutes');
const expenseRoutes = require('./routes/expenseRoutes');
const purchaseRoutes = require('./routes/purchaseRoutes');
const leaderboardRoutes = require('./routes/leaderboardRoutes');
const passwordRoutes = require('./routes/passwordRoutes');

// Model Tables
const Users = require('./models/users');
const Expenses = require('./models/expense');
const Orders = require('./models/order');
const Forgotpassword = require('./models/forgotpass');
const Downloads = require('./models/download');

// Using packages to read Requests
const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/user', signupRoutes);
app.use('/user', loginRoutes);
app.use('/expenses', expenseRoutes);
app.use('/purchase', purchaseRoutes);
app.use('/premiumFeatures', leaderboardRoutes);
app.use('/password', passwordRoutes);

// Associations
Users.hasMany(Expenses);
Expenses.belongsTo(Users);

Users.hasMany(Orders);
Orders.belongsTo(Users);

Users.hasMany(Forgotpassword);
Forgotpassword.belongsTo(Users);

Users.hasMany(Downloads);
Downloads.belongsTo(Users);

// DB & server start
sequelize
    .sync()
    // .sync({force: true})
    .then(result => {
        // console.log(result);
        app.listen(3000);
    })
    .catch(err => console.log(err));