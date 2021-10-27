const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
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
// router.post('/',function(req,res,next){
//     res.send({
//     type: 'POST',
//     name: req.body.name,
//     location: req.body.location
// });
//  });
// router.post('/',function(req,res,next){
//     Emp.create(req.body).then(function(emp){
//         res.send(emp);
//     }).catch(next);
// });
// // router.post('/',async(req,res)=>{
// //     const emp = new Emp({
// //             name: req.body.name,
// //             location: req.body.location,
// //             bool: req.body.bool
// // });
// // console.log(req.body.name);
// // const e1 = await emp.save();
// // res.json(e1);
// // })
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
        emp.name = req.body.name;
        emp.location = req.body.location;
        const e1 = await emp.save();
        res.json(e1);
    }catch(err){
        res.send('error' + err)
    }
})
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
router.delete('/:id', async(req, res)=>{
    try{
        const emp = await Emp.deleteOne({"_id":req.params.id});
        res.send("updated....!"); 
    }catch(err){
        res.send('error' + err)
    }
})
module.exports = router;