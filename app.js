const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://localhost/empDb"

const app = express();

//badyParser
app.use(express.urlencoded({ extended: false}))

mongoose.connect(url, {useNewUrlParser:true})

//to handle the above connection
const con = mongoose.connection

mongoose.Promise = global.Promise;

con.on('open', function(){
    console.log("db connected....!")
})

app.use(express.json());

//creating a router for handling emps related routings
const empRouter = require("./routes/emps")

//for all the emps req we have to send request to empRouter
app.use('/emps',empRouter);

app.listen(7499, ()=>{
    console.log('server on port 7499....!')
})