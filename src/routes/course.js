const express=require('express')
const Course=require('../models/course')
const router=new express.Router()

router.get('/course/:name',async(req,res)=>{
    const name=req.params.name
    try {
        const course=await Course.findOne({name})
        if(!course){
            return res.status(404).send("Course not Found!!")
        }
        res.status(200).send(course)
    } catch (e) {
        res.status(500).send("Something went wrong!")
    }
    
})
router.post('/createCourse',async(req,res)=>{
    const course=new Course(req.body)
    try {
        await course.save()
        res.status(201).send(course)
    } catch (e) {
        res.status(400).send("Something Went Wrong!")
    }
    
})

router.patch('/course/:id',async(req,res)=>{
    const updates=Object.keys(req.body)
    const allowedUpdates=['name']
    const isValidOperation=updates.every((update)=>{
        return allowedUpdates.includes(update)
    })
    if(!isValidOperation){
        return res.status(400).send("Invalid Update")
    }
    try {
        const _id=req.params.id
        const course=await Course.findByIdAndUpdate(_id,req.body,{new:true})
        if(!course){
            return res.status(404).send("Course not Found!")
        }
        res.status(200).send(course)
    } catch (e) {
        res.status(500).send("Something went wrong!")
    }
})

router.delete('/course/:id',async(req,res)=>{
    try {
        const course=await Course.findByIdAndDelete(req.params.id)
        if(!course){
            return res.status(404).send("Course not Found!")
        }
        res.status(200).send(course)
    } catch (e) {
        res.status(500).send("Something went wrong!")
    }
})

module.exports=router