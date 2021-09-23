const mongoose=require('mongoose')

const Course=mongoose.model('Course',{
    name:{
        type: String
    },
    quizId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quiz'
    }
})

module.exports=Course