const express = require('express');
const cookieParser = require('cookie-parser');
const app     = express();
const PORT    = 3000;



app.use(cookieParser('signed'));
app.use( express.urlencoded({extended: true}))
app.get('/', (req,res) =>{
    res.cookie('username', 'qrsl');
    res.cookie('cart', {items: [1,2,3]})
    res.cookie('forever',  'forever value', { maxAge: 6000})
    res.cookie('signed', 'random text', { signed: true});
    res.send('hello my Friend');
})


app.get('/cookies', (req,res) =>{
    res.write( `<h1>Username : ${req.cookies.username}</h1>`)
    res.write(`<h1>forever - ${req.cookies.forever}</h1>`)
    res.write(`<h1>Cart - ${req.cookies.cart.items.join('')}</h1>`)
    res.write(`<h1>Signed - ${req.signedCookies['signed']} </h1>`)
    res.end();
})



app.get('/clear', (req,res) =>{
    res.clearCookie('cart');
    res.clearCookie('username');
    res.send('Cookies has been removed')
})
app.listen(PORT, () =>{
   console.log(` listening port ${PORT}`)
})