const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contactus');
const successRoutes = require('./routes/success');
const errorRoutes = require('./routes/404');

app.use(bodyParser.urlencoded({extended: false}));
// making static folder -> users will be able to access this path
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);
app.use(successRoutes);
app.use(errorRoutes);

app.listen(3000);