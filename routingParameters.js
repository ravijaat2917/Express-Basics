const express = require('express');

const app = express();
const {data} = require('./people');

app.get('/' , (req , res )=>{
    res.status(200).send("<H1>HomePage</H1><a href='/people'>all people</a>");
})

app.get('/people/:id',(req , res)=>{ // takes the value from the url and search in data file and show the result.
    let newData = data.find(people => people.id == req.params.id);
    res.status(200).send(newData);
})

app.listen(3000 , ()=>{
    console.log("listening on port 3000");
})