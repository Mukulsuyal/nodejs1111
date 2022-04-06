const express = require('express');
const router = new express.Router();
const Student = require('../models/students'); 
//read data of registred Student

router.get("/students",async(req,res)=>{

    try{
      const studentsData=  await Student.find();
      res.send(studentsData)
    }catch(e){
        res.send(e);

    }
})



//get the indivisual student data using Id

router.get("/students/:id",async(req,res)=>{

    try{
        const _id = req.params.id;
      const studentData = await Student.findById({_id});

      if(!studentData){
          return res.status(404).send();
      }else{
        res.send(studentData);
      }
      
    }catch(e){
        res.send(e);
    }
})


module.exports = router;
