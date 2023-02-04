import express from 'express'
import mangoose from 'mongoose'
import Videos from './dbModel.js'
import Cors from './dbModel.js'

const app = express()
const port = process.env.PORT || 9000
const connection_url = 'mongodb+srv://Megavath6303:Megavath@2200@cluster0.eec2qww.mongodb.net/?retryWrites=true&w=majority'


//middleWare 
app.use(express.json())
app.use(Cors())

//db config
mangoose.connect(
    connection_url,{
        userNewUrlParser : true,
        userCreateIndex : true,
        useUnifiedTopology : true
})

//api endpoint 

app.get("/" , (req , res) => res.status(200).send("TikTok mern clone -- TheWebDev"))

app.post('/v2/posts', (req , res ) => {
    const dbVideos = req.body
    Videos.create(dbVideos,(err , data) => {
        if(err)
        res.status(500).send(err)
        else
        res.status(201).send(data)
    })
})

app.get('/v2/posts', (req , res )  => {
    Videos.find((err , data) => {
        if(err)
        res.status(500).send(err)
        else
        res.status(200).send(data)
    })
})

//listen
app.listen(port , () => console.log(`Listening on localhost : ${port}`))