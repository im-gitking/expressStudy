const express = require('express');

const bodyParser = require('body-parser');

const app = express();

// importing admin.js exported codes
const adminRoutes = require('./routes/admin');

// importing shop.js exported codes
const shopRoutes = require('./routes/admin');

app.use(bodyParser.urlencoded({extended: false}));

// app.get('/favicon.ico', (req, res) => {
//     console.log('favicon');
//     res.status(204);
// });

// sending req/res to admin.js so that imported codes can run at this point
// if we add path, it will focus rest path after the sepecifed path on URL
// app.use('/admin', adminRoutes);

// sending req/res to shop.js so that imported codes can run at this point
app.use(shopRoutes);

// add 404 Error Page
app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});

app.listen(4000);