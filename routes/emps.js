const express = require("express");
const router = express.Router();
const Emp = require("../models/emp");

router.get('/',async(req, res)=>{
    try{
        const emps = await Emp.find();
        res.json(emps);
        res.send('get req');
        console.log('get req');
    }catch(err){
        res.send('error'+ err)
    }
})

router.get('/:id',async(req, res)=>{
    try{
        const emp = await Emp.findById(req.params.id);
        res.json(emp);
        res.send('get req');
        console.log('get req');
    }catch(err){
        res.send('error'+ err)
    }
})

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
router.patch('/:id', async(req, res)=>{
    try{
        const emp = await Emp.findById(req.params.id);
        emp.bool = req.body.bool;
        const e1 = await emp.save();
        res.json(e1);
    }catch(err){
        res.send('error' + err)
    }
})
module.exports = router;