const express = require('express');
//parses body of incoming body
//npm install --save body-parser
const bodyParser = require('body-parser');

const app = express();

//imports admin.js containing routes
const adminRoutes = require('./routes/admin');

const shopRoutes = require('./routes/shop');

//exended os for parsing no default features
app.use(bodyParser.urlencoded({extended: false}));
//automatically considers admin routes. Ourder still matters so this needs to be above homepage
app.use(adminRoutes);
app.use(shopRoutes);

app.listen(3000);