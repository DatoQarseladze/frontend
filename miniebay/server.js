const express = require('express');
const app = express();
const path  = require('path');
const port = 3000;
const cookieParser = require('cookie-parser')
const session = require('express-session');

app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
app.set('views', './public')
app.set('view engine', 'pug');


let id = 0;
let products = [
    new Object({ selected: 2,name:'ssd', title:'SSD Page', id:id++, price:73, mul: function(){return this.price*this.selected}, image: 'https://images-na.ssl-images-amazon.com/images/I/71v2CC1y-SL._SX355_.jpg'}),
    { selected: 0,name:'graphic',title:'Graphic Page', id:id++, price:203, mul: Math.floor(this.price*this.selected), image: 'https://images-na.ssl-images-amazon.com/images/I/81eBuby6ECL._SX425_.jpg'},
    { selected: 0,name:'hdmi', title:'HDMI Page' , id:id++,price:121, mul: Math.floor(this.price*this.selected), image: 'data:image/jpeg;base64,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'}
]


let names = ['Name ', 'Price ', 'Quantity ', 'Total ']



app.get('/summary', (req,res) =>{
//     res.send(products.map( product =>{
//         return `<h2 id ="product-${product.id}" 
//         data-id="${product.id}" 
//         onclick="window.location.replace('http://localhost:3000/products/${product.id}')">
//         ${product.name}
//         </h2>`
//    }).join(``)
//     );
//    let mappedData = products.map(product =>{
//        return `<h2> ${product.name}</h2>`
//    })
 
        res.render('summary', {
            name: names,
            product: products,
            title: 'Summary Page',
            ssd: 'ssd',
            hdmi: 'hdmi',
            graphic: 'graphic',
            message: 'Summary',
      
        })
})

app.get('/products', (req,res) =>{
    res.render('products', {
        title: 'Product Page',
        message: 'Products Page',

    })
})

app.get('/products/:name', (req,res)=>{
    const name = req.params.name
    let product = products.find(p => p.name == name)
    res.render('ssd', {
        title: product.title,
        message: product.title,
        price: product.price, 
        image: product.image,
    });
    })


 app.post('/products/:name/', (req,res)=>{
        const name = req.params.name
        const value = Math.floor(req.body.valueQuantity)
        let product = products.find(p => p.name == name)
        product.selected += value;
        res.render('ssd', {
            title: product.title,
            selected: product.selected,
            message: value,
            price: product.price, 
            image: product.image,
        });
       
        })

app.listen(port, () =>{
    console.log(`Listening ${port}`)
})
