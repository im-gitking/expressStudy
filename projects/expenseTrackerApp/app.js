const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const sequelize = require('./util/database');
const signupRoutes = require('./routes/signupRoutes');
const loginRoutes = require('./routes/loginRoutes');
const expenseRoutes = require('./routes/expenseRoutes');
const Users = require('./models/users');
const Expenses = require('./models/expense');

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
    Users.findByPk(8)
        .then(user => {
            req.user = user;
            next();
        })
        .catch(err => {
            console.log(err);
        })
})

app.use('/user', signupRoutes);
app.use('/user', loginRoutes);
app.use('/expenses', expenseRoutes);

Users.hasMany(Expenses);
Expenses.belongsTo(Users);


sequelize
    .sync()
    // .sync({force: true})
    .then(result => {
        // console.log(result);
        app.listen(3000);
    })
    .catch(err => console.log(err));