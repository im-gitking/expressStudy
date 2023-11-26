const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

<<<<<<< HEAD
const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
=======
const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contactus');
const successRoutes = require('./routes/success');
const errorRoutes = require('./routes/404');

app.use(bodyParser.urlencoded({extended: false}));
// making static folder -> users will be able to access this path
>>>>>>> dd67458780327b4cf23cfa944dce14267ac7cacd
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
<<<<<<< HEAD

app.use(errorController.get404);

app.listen(3000);
=======
app.use(contactRoutes);
app.use(successRoutes);
app.use(errorRoutes);

app.listen(3000);
>>>>>>> dd67458780327b4cf23cfa944dce14267ac7cacd
