const express = require('express');
const router = express.Router();

let products = [
    {price:1203333, title:'Apple', id:0},
    {price:100, title:'Google', id:1},
    {price:12, title:'Nokia', id:2}
]

router.get('/', (req,res) =>{
    res.render('products/index', {title: 'Products Page ', products})
})

router.get('/add', (req,res) =>{
    res.render('products/index', {title: 'Products Add Page' })
})



router.get('/:id(\\d)', (req,res) =>{
    let id = req.params.id;
    res.render('products/detail', {title: `product - ${id} `, product: products[id]})
})


module.exports = router;
