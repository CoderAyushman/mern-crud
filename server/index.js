const express=require('express')
const mongoose=require('mongoose')
const cors = require('cors')
const UserModel= require('./models/index.js')

const app = express()
app.use(cors())
app.use(express.json())

const port=3000

mongoose.connect("mongodb+srv://mishraayushman:jdgwPh5vwgZ6nx7@cricketcluster.frcaizi.mongodb.net/crud",)

app.post("/createUser",(req,res)=>{
    console.log(req.body)
    UserModel.create(req.body)
    .then((users) => {
        res.json(users)
    }).catch((err) => {
        res.json(err)
    });
})

app.listen(port,()=>{
    console.log(`app is litioning in ${port}`)
})

