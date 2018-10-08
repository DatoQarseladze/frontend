const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
let productsDB = [];

app.set('views', './source/views');
app.set('view engine', 'pug');
app.use( express.static(path.join(__dirname, '/public')))
app.use( express.urlencoded( { extended: true}));

app.get('/', (req,res) =>{
    res.render('index', {title: 'Demo Title',
                                 added : false,
                                 productsDB});
})

app.listen(PORT, () =>{
    console.log(` Server Port - ${PORT}`)
})



app.post('/', (req,res) =>{
   const {product_name, product_price, product_id} = req.body;
    productsDB.push({product_id, product_name, product_price});
    res.render('index', {title: 'Demo Title',
                          added : true,
                          productsDB})
})