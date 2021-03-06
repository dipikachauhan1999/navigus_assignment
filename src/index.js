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

app.get('/',  (req, res)=> {
    res.header('Content-Type', 'text/html').send(`<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Navigus</title>
    </head>
    <body>
        <h1>Welcome to My Navigus Assignment</h1>
        <h3><a href="https://github.com/dipikachauhan1999/navigus_assignment">Click</a> here to visit the Github repository to know about the endpoints</h3>
        <br>
        <p><a href="https://deepik-chauhan-navigus.herokuapp.com/quiz/614c53f7e638635bd42c50c9">GET</a> Quiz</p>
    </body>
    </html>`);
 });

app.listen(port,()=>{
    console.log('Server is running @'+ port);
})


