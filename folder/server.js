const express = require('express')
const app = express()

let id = 0
let products = [
    {id:id++,
     name: 'car',
     price: 50},

     {id:id++,
     name:'phone',
     price: 5},
]

app.get('/', (req,res)=>{
    res.send('Hellsadadada o')
})

app.get('/users/:userId(\\d)', (req,res)=>{
    const userId = req.params.userId
    res.send(`user id - ${userId}`)
})



app.get('/products', (req, res)=>{
    res.send(
     products.map( product => {
         return ` <h2 id= "product-${product.id}"
         data-id="${product.id}"    
         onclick="window.location.replace('http://localhost:4000/products/${product.id}')"> 
         ${product.name}
         </h2>`
                       
        }).join(' ')
    )
})

app.get('/products/:productId', (req,res)=>{
    const id = req.params.productId;
    const Product = products.find( prod => prod.id == id);

    let response = " <a href='http://localhost:4000/products/'>Go Back </a> <h1>Product not found </h1> "
    if(Product){
        response = `
        <a href='http://localhost:4000/products/'>Go Back </a>
        <h1>${Product.name}</h1>
        <hr>
        <h2>Price ${Product.price}, id - ${Product.id} </h2>
        `
    
    }
    res.send(response);
})

app.listen(4000);


app.post('/products/:id/:name/:price', (req,res)=>{
    let product = {
        id: req.params.id,
        name: req.params.name,
        price: req.params.price
    }

    products.push(product);
    res.json( {message: 'Product created', product});
})

app.delete('/products/:id', (req,res)=>{
    const id = products.findIndex( p => p.id == req.params.id);
    const product = products[id];
    products.splice(id,1);
    res.json( {message : 'Product deleted', product})
})