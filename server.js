const express = require('express');
const path = require('path');

const app = express();

//app.get , app.post , app.put , app.delete
//app.all , app.use , app.listen

app.get('/' , (req , res)=>{
    res.sendFile(path.resolve(__dirname ,("./home.html")));
    //res.send("<h1>Home Page<h1/>");
})

app.post('/' , (req , res)=>{
    res.send("Post Request");
})

app.all('*' , (req , res)=>{
    res.status(404).send('Page not found');
})

app.use(express.static("./nodeModules"));

app.listen( 3000 , ()=>{
    console.log("Server Listening on Port 3000...");
    console.log(__dirname);
});