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
let id = 0;

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



app.get('/searchName/', (req, res) => {
    const name = req.query.searchName;
    const human = people.find(prod => prod.name == name);
    if (human === undefined) {
        return;
    }
    res.send(

        `<h2>${human.name} , ${human.surname} , ${human.fatherName} , ${human.personalNumber}, ${human.id} </h2>`
    )
})

app.get('/searchPersonal', (req, res) => {
    const personalNumber = req.query.searchPersonal;
    const human = people.find(prod => prod.personalNumber == personalNumber);

    res.send(
        `<h2>${human.name} , ${human.surname} , ${human.fatherName} , ${human.personalNumber}  </h2>`
    )
})


app.post('/save/', (req, res) => {
    let newhuman = {
        name: req.body.name,
        surname: req.body.surname,
        personalNumber: req.body.personalNumber,
        fatherName: req.body.fatherName,
        bday: req.body.bday,
        id: id++
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
        color: req.body.color
    };
    cars.push(newcar)
    res.render('view', {
        message: 'has been added'
    })
})

// app.post('/')

app.listen(port, () => {
    console.log(`Loading .... ${port}`)
})