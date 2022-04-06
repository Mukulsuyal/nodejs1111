const express = require('express');
const router = new express.Router();
const Student = require('../models/students'); 

router.post("/students",async(req,res)=>{

    try{
        const user = new Student(req.body);

        const createUser=await user.save();
        res.status(201).send(createUser);

    }catch(e){ res.status(400).send(e); }
    
})

module.exports = router;