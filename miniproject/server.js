const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const cookieParser = require('cookie-parser')

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.set('views', './public')
app.set('view engine', 'pug');

let people = [];
let cars = [];
let id = -1;

app.get('/', (req, res) => {
    res.render('view', {

    })
})

app.get('/cars', (req, res) => {
    res.render('carview', {

    })
})

app.get('/searchPage', (req, res) => {
    res.render('search.pug', {
            
    })
})

app.get('/people', (req, res) => {
    res.send(
        people.map(product => {
            return ` <h2> 
         ${product.name}
         ${product.surname}
         </h2>`

        }).join(' ')
    )
})

app.get('/manqanebi', (req, res) => {
    res.send(
        cars.map(product => {
            return ` <h2> 
         ${product.model}
         </h2>`

        }).join(' ')
    )
})



app.get('/searchName', (req, res) => {
    const name = req.query.searchName;
    const surname = req.query.searchSurname
    const human = people.find(prod => prod.name == name);
    if(human === undefined){
        return
    }
    if(human.surname == surname){
        res.render('search', human)
    }else{
    const human = people.find(prod => prod.surname == surname)
        if (human === undefined) {
            return
        }
        else if(name == human.name){
            res.render('search', human)
           }
    }
    res.render('search', human )
})



app.get('/searchPersonal', (req, res) => {
    const personalNumber = req.query.searchPersonal;
    const human = people.find(prod => prod.personalNumber == personalNumber);

    res.render('search', human)
})


app.post('/save', (req, res) => {
  
    let newhuman = {
        name: req.body.name,
        surname: req.body.surname,
        personalNumber: req.body.personalNumber,
        fatherName: req.body.fatherName,
        bday: req.body.bday,
        id: ++id,
        cars: [],
    }

    people.push(newhuman)
    res.render('view', {   
 })
    
})

app.post('/savecar', (req, res) => {
    let newcar = {
        manufacter: req.body.manufacter,
        model: req.body.model,
        vin: req.body.vin,
        number: req.body.number,
        color: req.body.color,
        owner: req.body.owner,
    };
    let user = people.find(p => p.name == req.body.owner);
    
    user.cars.push(newcar);
    
    cars.push(newcar)
    res.render('view', {
        message: 'Car has been added'
    })
    console.log(user.cars);
})

app.post('/searchEdit', (req,res) =>{

    let name = req.body.searchText;
    console.log(name);
    
    const human = people.find(prod => prod.name == name);
    console.log(human);
    if(human === undefined){
        return
    }
    res.render('edit', {
        title:' Edit Page',
        name: human.name,
        surname: human.surname,
        personalNumber: human.personalNumber,
        id: human.id
    })
  
})

app.post('/edit', (req,res) =>{
    console.log(id); 
    const human = people.find(something => something.id === Number(id));
    human.name = req.body.name
    human.surname = req.body.surname
    human.personalNumber = req.body.personalNumber
    console.log(human.fatherName);
    human.fatherName = req.body.fatherName
    res.render('view', )
    
   
})

app.post('/delete', (req,res) =>{
  console.log(id);
  people.splice(id, 1)
  res.render('view')

})

app.listen(port, () => {
    console.log(`Loading .... ${port}`)
})