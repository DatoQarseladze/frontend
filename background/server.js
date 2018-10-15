const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
const PORT = 3000;
const path = require('path');


app.set('views', './views')
app.set('view engine', 'pug');
app.use(cookieParser('cipher'));
app.use( express.static( path.join(__dirname, '/public') )  );
app.use(  express.urlencoded( { extended: true } ) );

app.get('/', (req,res)=>{
    res.render('index', {
        title: "Demo Title",
        color: req.cookies.color
        
    })
})

app.post('/save', (req,res) =>{
    const color = req.body.color
    res.cookie('color', color)
    res.render('index', {
        title: 'Demo Title',
        color: req.body.color
    })
})



app.listen(PORT);