const mongoose=require('mongoose')

const Student=mongoose.model('Student',{
    rollNo:{
        type: Number
    },
    name:{
        type: String
    },

})

module.exports=Student