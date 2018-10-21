const express = require('express');
const path = require('path');
const country = require('./countries')
const app = express();


app.use( express.static(path.join(__dirname, 'public')))
app.use( express.static(path.join(__dirname, 'node_modules/jquery')))
app.use( express.urlencoded({extended: true}))

let PORT = process.env.PORT || 3000;

app.get('/', (req,res) =>{
    res.render('index.html')
})




app.get('/countries:prefix', (req,res)=>{
    if( !req.params.prefix){
        return res.sendStatus(400);
    }
    let prefix  = req.params.prefix.toUpperCase();
    let result = countries.filter(country => 
        country.name.toUpperCase().startWith(prefix)
        ).map(country => country.name)
        res.json(result);
})



app.get('/add', (req,res) =>{
    if( !req.query.num_1 || !req.query.num_2){
        res.sendStatus(400);
    }
    let num_1 = Number(req.query.num_1);
    let num_2 = Number(req.query.num_2);
    let result = num_1 + num_2;
    let isprime = true;
    let count = 0;
    for(let counter = num_1; counter < num_2; counter = counter + 1){
       
            isprime = true;
            let limit = Math.round(Math.sqrt(counter));

            for( var mod = 2; mod <= limit; mod++){
                if( counter% mod == 0){
                    isprime = false
                    break;
                }
            }
        
      if(isprime) {
          count = count +1;
      }
    }
    
    // res.send(result.toString());

    setTimeout( () =>{
        res.send(count.toString());
    }, 1000)
})

app.listen(PORT, () =>{
    console.log(`Listening ${PORT}`)
})