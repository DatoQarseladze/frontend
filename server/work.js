const express = require('express')
const app = express()
const path = require('path')
const bodyParser = express.urlencoded({ extended: true });

id=0;
app.use(bodyParser);
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
              Product id-${product.id} ,name ${product.name}, price ${product.price}
             </h2>`
        }).join(``)
    )
 })


app.post('/products/', (req, res) => {
    let id = req.body.textField;
    let name = req.body.nameValue;
    let price = req.body.priceValue;
    let product = {
      id,name,price
    }
 
    products.push(product)
    res.json(  `product added, ${product.name}`)
   
    // console.log(`${id,name, price}`);
 })


 app.get('/product/:id', (req, res) => {
   const id = req.params.id
//    let product = products.find(p => p.id == id)
//    if (!product) {
//        // return res.status(404).send("no product found")
//        return res.sendStatus(404)
//    } else {
//        res.json(product)
//    }
res.json('hello')
})
// app.get('/products', (req,res) => {
   
// })

app.listen(PORT, () => {
    console.log(`Server on port - ${PORT}`)
 })