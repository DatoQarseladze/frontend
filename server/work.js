const express = require('express')
const app = express()
const path = require('path')

id=0;

const PORT = 3000;
let products = [{id: id++, name: 'apple', price: 200},
                {id: id++, name: 'samsung', price: 300}];
// app.use(express.static(path.join(__dirname, '/public')));


app.get('/', (req,res)=>{
    res.sendFile('index.html', {root : path.join( __dirname, 'public')})

})

app.get('/products', (req,res)=>{
    res.send(
        products.map( product =>{
             return `<h2 id ="product-${product.id}" 
             data-id="${product.id}" 
             onclick="window.location.replace('http://localhost:3000/products/${product.id}')">
             ${product.name}
             </h2>`
        }).join(``)
    )
 })


app.post('/products/:id/:name/:price', (req, res) => {
    let newObj = {
        id: req.params.id,
        name: req.params.name,
        price: req.params.price
    }
    products.push(newObj)
    res.json({ message: "product added", newObj })
 })

// app.get('/products', (req,res) => {
   
// })

app.listen(PORT, () => {
    console.log(`Server on port - ${PORT}`)
 })