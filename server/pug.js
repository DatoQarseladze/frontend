const express = require('express')
const app = express()
const path = require('path')



const PORT = 3000

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req,res)=>{
    res.render('index', {
     title: 'Page Title',
     message:'Welcome Message!...', 
     numbers:[1,2,3,4,5,6]} )
})

app.listen(PORT, () =>{
    console.log(`Running on Port - ${PORT}`)
})

app.get('/about', (req,res)=>{
    res.render('about', {title: 'About'})
})