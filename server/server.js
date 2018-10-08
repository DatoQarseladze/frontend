const express = require('express')
const app = express()
const path = require('path')


id= 0;
const PORT = 3000
let products = [{id: id++, name: 'apple', price: 200},
                {id: id++, name: 'samsung', price: 2000}]

 

let myMid = function(req,res,next){
    console.log(`${req.ip},  ${req.hostname} MiddCleware function`);
    next();
}

let timeLog = function(req,res,next){
  let time = new Date();
  
  req.requestTime = `${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`
  next();
}


app.use(express.static(path.join(__dirname, '/public')));
app.use(myMid);
app.use(timeLog);

app.get('/', (req, res) => {
    // res.json({ text: "Hello text" })
    console.log(` Index html : ${req.requestTime}`)
    // res.sendFile(path.join(__dirname, '/public', 'index.html'))
    // res.sendFile('index.html')
    // res.sendFile('calc.html', { root: path.join(__dirname, '/public') })
 })

 app.get('/calc', (req,res) =>{
      let num1 = parseFloat(req.query.num1);
      let num2 = parseFloat(req.query.num2);
      let operation = req.query.operation;

      switch(operation){
          case '+':
          res.send(` ${num1 + num2}`)
          break;
          case '-':
          res.send(`${num1 - num2}`)
          break;
          case '*':
          res.send(`${num1 * num2}`)
          break;
          case '/':
          res.send(`${num1 / num2}`)
          break;
      }

    res.sendFile('calc.html', {root : path.join( __dirname, 'public')})
 })


 app.get('/', (req,res) =>{
     res.sendFile('index.html', {root : path.join( __dirname, 'public')})
 })

//  app.get('/products', (req,res) =>{
//     res.send(`${products}`)


// })
app.get('/products/:productId', (req,res)=>{
    const id = req.params.productId;
    const product = products.find(prod => prod.id == id);
    let response ='product not found'
    if(product){
         response = `
        <a href="http://localhost:3000/products/">Go Back</a>
        <h1>${product.name}</h1>
        <hr>
        <h2>Price $ ${product.price}, Id - ${product.id}</h2>
        `
    }
    

    res.send(response)
})

app.get('/admin', (req, res) => {
   res.redirect('/')
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


app.get('/product/:id', (req, res) => {
   const id = req.params.id
   let product = products.find(p => p.id == id)
   if (!product) {
       // return res.status(404).send("no product found")
       return res.sendStatus(404).send('kuku xar')
   } else {
    //    console.log('kukuxar')
       res.json(product)
   }

})

app.get('/productname/:name', (req, res) => {
   const name = req.params.name
   let product = products.find(p => p.name == name)
   if (!product) {
       return res.sendStatus(404)
   } else {
       res.json(product)
   }
})

app.delete('/product/:id', (req, res) => {
   const id = products.findIndex(p => p.id == req.params.id)
   const product = products[id]
   products.splice(id, 1)
   res.json({ message: "product deleted", product })
})

// app.post('/product/:id/:name/:price', (req, res) => {
//    let newObj = {
//        id: req.params.id,
//        name: req.params.name,
//        price: req.params.price
//    }
//    products.push(newObj)
//    res.json({ message: "product added", newObj })
// })

app.listen(PORT, () => {
   console.log(`Server on port - ${PORT}`)
})