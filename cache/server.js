const express = require("express");

const app = express();

const path = require("path");

const multer = require("multer");
const mCache = require('memory-cache')




const PORT = process.env.PORT || 3000;




app.use(express.static(path.join(__dirname,`/public`)));
app.set('view engine','pug');
app.set('views',"public/views");



mCache.put('super-cache', 'wow', 300, function(key,value) {
    console.log(`Key ${key}, Value - ${value}`)
})

console.log(`Super cache - ${mCache.get('super-cache')}`)



const cachePage = (duration) =>{
    return (req,res, next) => {
     let key =  `__cached__${req.originalUrl || req.url}`
     let pageBody = mCache.get(key);

     if( pagebody ){
         res.send(pageBody);

     }else{
         res.sendResponse = res.send;
         res.send = (body) =>{
             mCache.put(key,body, duration * 1000);
             res.sendResponse(body);
         }
         next();    
     }
    }
}

setTimeout( ()=>{
    console.log(`Super cache - ${mCache.get('super-cache')}`)

}, 1000);

const multerConfig = multer({

    dest : 'public/uploads'

});



app.get('/', (req,res)=>{
    
    res.sendFile( path.join(__dirname, '/public', 'upload.html') )

});

app.post('/', multerConfig.single('image'), (req,res) => {
    const username = req.body.username
    const imgUrl = path.join('uploads', req.file.filename);
 
    res.render('index', {imgUrl, username} );
 
 });




app.get('/cache', cachePage(4), (req,res) =>{
    setTimeout( ()=>{
      const data = new Date();
      let time = `${data.getHours()}: ${data.getMinutes()}: ${data.getSeconds()}`
      res.render('cached', {time});
    }, 3000)
 })
app.listen(PORT,()=>{

    console.log(`Started .. ${PORT}`);

})