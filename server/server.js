const express = require('express')
const app = express()
const path = require('path')



const PORT = 3000
let id = 0
let products = [
   { name: "apple", id: id++, price: 4000 },
   { name: "samsung", id: id++, price: 3000 },
]


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
          
          res.send(`     <button onclick='http://google.com'>Go back</button>  ${num1 + num2}`)
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
app.get('/admin', (req, res) => {
   res.redirect('/')
})

app.get('/products', (req, res) => {
   res.json(products)
})

app.get('/', (req,res) =>{

})



app.get('/product/:id', (req, res) => {
   const id = req.params.id
   let product = products.find(p => p.id == id)
   if (!product) {
       // return res.status(404).send("no product found")
       return res.sendStatus(404)
   } else {
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

app.post('/product/:id/:name/:price', (req, res) => {
   let newObj = {
       id: req.params.id,
       name: req.params.name,
       price: req.params.price
   }
   products.push(newObj)
   res.json({ message: "product added", newObj })
})

app.listen(PORT, () => {
   console.log(`Server on port - ${PORT}`)
})