const mongoose=require('mongoose')

const Teacher=mongoose.model('Teacher',{
    name:{
        type: String
    }
})

module.exports=Teacher