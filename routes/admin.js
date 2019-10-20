const express = require('express');

//router replaces app from previous server.js page
const router = express.Router();

//section for routes
router.get('/add-product', (req, res) => {
    //... response 
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

//get only goes when there are incoming get requests
router.post('/product', (req, res) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;