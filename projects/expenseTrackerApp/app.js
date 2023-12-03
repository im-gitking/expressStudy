const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const sequelize = require('./util/database');
const homeRoutes = require('./routes/home');
const deleteRoutes = require('./routes/deleteRoute');
const editRoutes = require('./routes/editRoute');
const UpdateRoutes = require('./routes/updateRoute');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', homeRoutes);
app.use('/delete', deleteRoutes);
app.use('/edit', editRoutes);
app.use('/update', UpdateRoutes);

sequelize
    .sync()
    .then(result => {
        // console.log(result);
    })
    .catch(err => {
        console.log(err);
    });

app.listen(5000);
