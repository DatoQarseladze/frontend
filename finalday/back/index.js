const express = require('express')
const cors = require('cors')
const crypto = require('crypto')
const fs = require('fs')
const app = express()
const secret = 'demo__system'

app.use(cors('*'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.get('/', (req, res) => {
  res.send('hello')
})

let ID = 1
const usersfile = '../react-demo/src/db/users.json'

app.post('/register', (req, res) => {
  let {
    name,
    lastname,
    username,
    password,
    email,
    birthdate,
    balance
  } = req.body

  const user = {
    id: '' + ID,
    name,
    lastname,
    username,
    password: encrypt(password),
    email,
    birthdate,
    balance,
    level: '1'
  }
 
  fs.readFile(usersfile, function (err, data) {

    let json = JSON.parse(data);
    json.push(user);
    console.log(json);
    fs.writeFile(usersfile, JSON.stringify(json), function(err) {
      if (err) res.redirect('http://localhost:3000')
      res.redirect('http://localhost:3000/contact')
      
    })
  })



    ID++
})

const encrypt = data => {
  const hash = crypto
    .createHmac('sha256', secret)
    .update(data)
    .digest('hex')
  return hash
}

const User = {
  username: 'admin',
  password: encrypt('admin123')
}

app.post('/login', (req, res) => {
  let { username, password } = req.body
  password = encrypt(password)
  if (User.username === username && User.password === password) {
    res.json({
      username,
      password,
      auth: true
    })
  } else {
    res.json({
      auth: false,
      message: 'User not found'
    })
  }
})

app.post('/signup', (req, res) => {
  let {
    username,
    password,
    name,
    lastname,
    email,
    birthdate,
    balance
  } = req.body
  // console.log(username, password, name, lastname, email, birthdate, balance)
  const user = {
    id: '' + userId
  }
})

app.listen(5000, () => {
  console.log(`Port -5000`)
})
