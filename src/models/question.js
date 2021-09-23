const mongoose=require('mongoose')

const Question=mongoose.model('Question',{
    desc:{
        type: String
    },
    options:{
        type: Array
    },
    correctOption:{
        type:  Number
    },
    marks:{
        type: Number
    },
    quizId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quiz'
    }
})

module.exports=Question