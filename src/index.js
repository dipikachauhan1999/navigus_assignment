const express=require('express')
require('./db/mongoose')

//Routers
const courseRouter=require('./routes/course')
const questionRouter=require('./routes/questions')
const quizRouter=require('./routes/quiz')


const app=express()
const port=process.env.PORT||3000
app.use(express.json())

app.use(courseRouter)
app.use(questionRouter)
app.use(quizRouter)


app.listen(port,()=>{
    console.log('Server is running @'+ port);
})


