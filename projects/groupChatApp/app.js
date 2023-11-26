const express = require('express');
const bodyParser = require('body-parser')

const login = require('./routes/login');
const chating = require('./routes/chatForm');
const errorPage = require('./routes/404.js');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/login', login);
app.use('/', chating);
app.use(errorPage);

app.listen('5000');