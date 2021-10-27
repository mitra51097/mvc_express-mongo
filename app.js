const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://localhost/empDb"
//const bodyParser = require("body-parser");

const app = express();
app.use(express.urlencoded({ extended: false}))
//app.use(bodyParser.json());
mongoose.connect(url, {useNewUrlParser:true})//to avoid some warnings
mongoose.Promise = global.Promise;
//to handle the above connection
const con = mongoose.connection

con.on('open', function(){
    console.log("db connected....!")
})
//app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());

//creating a router for handling employee related routings
const empRouter = require("./routes/emps")
//for all the employees req we have to send request to employeeRouter
app.use('/emps',empRouter);

app.listen(7499, ()=>{
    console.log('server on port 7499....!')
})