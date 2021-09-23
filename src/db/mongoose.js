const mongoose=require('mongoose')

const db='mongodb+srv://dipika:Deeputanu%4019@cluster0.yspis.mongodb.net/navigus?retryWrites=true&w=majority'

mongoose.connect(db,{
    useNewURLParser:true,
}).then(()=>{
    console.log('Connected to database');
}).catch((e)=>{
    console.log(e);
})


