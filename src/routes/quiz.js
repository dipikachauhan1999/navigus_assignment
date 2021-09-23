const express=require('express')
const Quiz=require('../models/quiz')
const Questions=require('../models/question')
const router=new express.Router()

router.get('/quiz/:id',async(req,res)=>{
    const _id=req.params.id
    try {
        const quiz=await Quiz.findById(_id)
        if(!quiz){
            return res.status(404).send("Quiz not Found!!")
        }
        const questions=await Questions.find({quizId:quiz._id})
        res.status(200).send({quiz,questions})
    } catch (e) {
        res.status(500).send("Something went wrong!")
    }
    
})
router.post('/createQuiz',async(req,res)=>{
    const quiz=new Quiz(req.body)
    try {
        await quiz.save()
        res.status(201).send(quiz)
    } catch (e) {
        res.status(400).send("Something went wrong!")
    }
    
})

router.patch('/quiz/:id',async(req,res)=>{
    const updates=Object.keys(req.body)
    const allowedUpdates=['noOfQustions','passingMarks','maxMarks']
    const isValidOperation=updates.every((update)=>{
        return allowedUpdates.includes(update)
    })
    if(!isValidOperation){
        return res.status(400).send("Invalid Update")
    }

    try {
        const _id=req.params.id
        const quiz=await Quiz.findByIdAndUpdate(_id,req.body,{new:true})
        if(!quiz){
            return res.status(404).send("Quiz not Found!")
        }
        res.status(200).send(quiz)
    } catch (e) {
        res.status(500).send("Something went wrong!")
    }
})

router.delete('/quiz/:id',async(req,res)=>{
    try {
        const quiz=await Quiz.findByIdAndDelete(req.params.id)
        if(!quiz){
            return res.status(404).send("Quiz not Found!")
        }
        res.status(200).send(quiz)
    } catch (e) {
        res.status(500).send("Something went wrong!")
    }
})

module.exports=router