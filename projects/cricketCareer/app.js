const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const sequelize = require('../../util/database');

const allRoutes = require('./routes/cricketer');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use('/cricketer', allRoutes);

sequelize
    .sync()
    .then(result => {
        // console.log(result);
        app.listen(4000);
    })
    .catch(err => console.log(err));