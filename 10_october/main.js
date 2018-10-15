const express = require('express');
const app = express();
const port = 3000;
const path    = require('path');



app.use( express.urlencoded( { extended:true }))
app.set('views', './public/');
app.set('view engine', 'pug');

let colors = [];
app.get('/', (req,res) =>{
    res.render('index', {title: 'Demo Title',
                                 message: 'Hello'});
})

app.post('/try', (req,res) =>{
//   res.cookie('color', req.body.favcolor)
//   res.render('index', {title: 'changed Title',
//                          message:'Hi'})
 
  res.cookie("color", req.body.favColor)
  res.render('index', {
      title:'Hello',
      message:'hi',
      color: req.body.favColor
  })
})

app.listen(port, () =>{
    console.log(`Listening ${port} `)
})
