const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const Emp = require("../models/emp");

//get request
router.get('/',async(req, res)=>{
    try{
        
        const emps = await Emp.find();
        res.json(emps);

    }catch(err){
        
        res.send('error'+ err)
    
    }
})

//get request with id
router.get('/:id',async(req, res)=>{
    try{
        
        const emp = await Emp.findById(req.params.id);
        res.json(emp);

    }catch(err){
        
        res.send('error'+ err)
    
    }
})

// post request
router.post('/', async(req, res)=>{
    const emp = new Emp({
        name: req.body.name,
        location: req.body.location,
        bool: req.body.bool
    })
    try{

        const e1 = await emp.save();
        res.json(e1);  
        console.log(e1.name);
    
    }catch(err){

        res.send("error" + err);
    
    }
})

//patch for updating specific data without modifying the entire data
router.patch('/:id', async(req, res)=>{
    try{

        const emp = await Emp.findById(req.params.id);
        //emp.bool = req.body.bool;
        emp.name = req.body.name;
        emp.location = req.body.location;
        const e1 = await emp.save();
        res.json(e1);
    
    }catch(err){

        res.send('error' + err)
    
    }
})

//put for updating entire data
router.put('/:id', async(req, res)=>{
    try{

        const emp = await Emp.findById(req.params.id);
        emp.bool = req.body.bool;
        emp.name = req.body.name;
        emp.location = req.body.location;
        const e1 = await emp.save();
        res.json(e1);
    
    }catch(err){
     
        res.send('error' + err)
    
    }
})

//delete by Id
router.delete('/:id', async(req, res)=>{
    try{

        const emp = await Emp.deleteOne({"_id":req.params.id});
        res.send("updated....!"); 
    
    }catch(err){
    
        res.send('error' + err)
    
    }
})

module.exports = router;