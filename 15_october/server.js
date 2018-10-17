const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const cookieParser = require('cookie-parser')
const session = require('express-session');

app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
app.use( session({ secret: 'super cat',
                   resave: true, 
                   saveUninitialized: true, }) )

let sessions = { 
         viewCount: 0,
         aboutCount: 0,
         contactCount: 0
}

// const myPages = {
//     main:{
//         url: '/',
//         count:0,
//     },
//     contact:{
//         url:'/contact',
//         count:0,
//     },
//     about:{
//         url:'/about',
//         count:0
//     }

// }
app.get('/', (req,res) =>{
    if( sessions.viewCount){
        sessions.viewCount++;
        res.send(`You visited this page ${sessions.viewCount} times`)
    }
    else{
           sessions.viewCount = 1;
           res.send(`Welcome to demo site`)
    }
})

app.get('/about', (req,res) =>{
    if( sessions.aboutCount){
        sessions.aboutCount++;
        res.send(`You visited this page ${sessions.aboutCount} times`)
    }
    else{
           sessions.aboutCount = 1;
           res.send(`Welcome to demo site`)
    }
})

app.get('/contact', (req,res)=>{
    if( sessions.contactCount){
        sessions.contactCount++;
        res.send(`You visited this page ${sessions.contactCount} times`)
    }
    else{
           sessions.contactCount = 1;
           res.send(`Welcome to demo site`)
    }
})

app.get('/destroy', (req,res)=>{
    req.session.destroy(() =>{
       res.send('Session Deleed')
    })
})


app.listen(PORT, ()=>{
    console.log(`Loading..... on ${PORT}` )
});


