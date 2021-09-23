const mongoose=require('mongoose')

const QuizSchema=new mongoose.Schema({
    noOfQustions:{
        type: Number
    },
    passingMarks:{
        type: Number
    },
    maxMarks:{
        type: Number
    },
    
    courseId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }
})

QuizSchema.virtual('questions',{
    ref:'Question',
    localField:'_id',
    foreignField:'quizId'
})

const Quiz=mongoose.model('Quiz',QuizSchema)
module.exports=Quiz