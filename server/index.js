import express from 'express'
import bodyParser from 'body-parser'
import mongosoe   from 'mongoose'
import cors from 'cors'
import postRoute from './routes/post.js'

const app = express()
app.use(cors())

app.use(bodyParser.json({limit: '30mb',extended: true}))
app.use(bodyParser.urlencoded({limit: '30mb',extended: true}))

app.use('/post',postRoute)



const CONNECTION_URL = 'mongodb+srv://tegar:tegar123xx@cluster0.xfdkb.mongodb.net/memories_project?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

mongosoe.connect(CONNECTION_URL,{useNewUrlParser: true,useUnifiedTopology: true})
    .then(() =>{
        app.listen(PORT,() => console.log(`Server Runnning on port : ${PORT}`))
    })
    .catch((error) =>
       console.log(error)
    )
mongosoe.set('useFindAndModify',false)