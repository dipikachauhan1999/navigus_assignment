const express=require('express')
const Question=require('../models/question')
const router=new express.Router()

router.post('/createQuestion',async(req,res)=>{
    let question=new Question(req.body)

    try {
        await question.save()
        res.send(question)
    } catch (e) {
        res.status(400).send("Something went wrong!")
    }
    
    
})


router.patch('/question/:id',async(req,res)=>{
    const updates=Object.keys(req.body)
    const allowedUpdates=['desc','options','correctOption','marks']
    const isValidOperation=updates.every((update)=>{
        return allowedUpdates.includes(update)
    })

    if(!isValidOperation){
        return res.status(400).send("Invalid Update")
    }
    try {
        const _id=req.params.id
        const question=await Question.findByIdAndUpdate(_id,req.body,{new:true})
        if(!question){
            return res.status(404).send("Question not Found!")
        }
        res.status(200).send(question)
    } catch (e) {
        res.status(500).send("Something went wrong!")
    }
})



router.delete('/question/:id',async(req,res)=>{
    try {
        const question=await Question.findByIdAndDelete(req.params.id)
        if(!question){
            return res.status(404).send("Question not Found!")
        }
        res.status(200).send(question)
    } catch (e) {
        res.status(500).send("Something went wrong!")
    }
})


module.exports=router