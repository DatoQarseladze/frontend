const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
app.use( express.static(path.join(__dirname, 'public')));



app.get('/', (req, res) => {
    res.render('index.html');
})

app.get('/add', (req,res) =>{
    if (!req.query.num_1 || !req.query.num_2)
    return res.sendStatus(400);

    let num1 = Number(req.query.num_1);
    let num2 = Number(req.query.num_2);
    let result = num1 + num2;
    
    setTimeout( () => {
        res.send(result.toString());
    }, 2000)
})

app.listen(PORT, () =>{
    console.log(`loading ${PORT}`)
})
