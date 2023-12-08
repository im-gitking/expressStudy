const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');
const Product = require('./models/product');
const User = require('./models/user');
const Cart = require('./models/cart');
const CartItem = require('./models/cart-item');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors()); // This will enable CORS for all routes

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    // for all incomming request this middelware will run and then next() will let next middlewares to run
    User.findByPk(1)
    .then(user => {
        // we can add new fields to our req object -> just need to carefull not changing existing one like body etc.
        // here we are adding user to req object and storing sequelize object "user" -> that has all sequelize features like destory, save etc.
        req.user = user;
        next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

// One-To-Many: Product belongs to one user & User has many products
// 
User.hasMany(Product);
Product.belongsTo(User, { constrains: true, onDelete: 'CASCADE' });
// or we can also write Product.belongsTo(User, { onDelete: 'CASCADE' }); as "constrains: true" by default

// One-To-One: User has one Cart & Cart belongs to one User
User.hasOne(Cart);
Cart.belongsTo(User);

// Many-To-Many: Cart belongs to many Product & Product belongs to many Cart
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });

sequelize
    // .sync({force: true})
    .sync()
    .then(result => {
        return User.findByPk(1);
        // console.log(result);
    })
    .then(user => {
        if(!user) {
            return User.create({name: 'Max', email: 'text@test.com'});
        }
        return user;
    })
    .then(user => {
        return user.getCart();
    })
    .then(cart => {
        if(!cart) {
           return user.createCart();
        }
        // console.log(cart);
        return cart;
    })
    .then(cart => {
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    });