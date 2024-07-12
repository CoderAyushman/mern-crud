const express=require('express')
const mongoose=require('mongoose')
const cors = require('cors')
const UserModel= require('./models/index.js')
require('dotenv').config();
const mongodbUrl = process.env.mongodbUrl;

const app = express()
app.use(cors())
app.use(express.json())

const port=3000

mongoose.connect(mongodbUrl)

app.post("/createUser",(req,res)=>{
    console.log(req.body)
    UserModel.create(req.body)
    .then((users) => {
        res.json(users)
    }).catch((err) => {
        res.json(err)
    });
})

app.get('/users',(req,res)=>{
    UserModel.find({})
    .then((result)=>{
        res.json(result)
    })
    .then((err)=>{
        console.log(err)
    })
})
app.get('/getUsers/:id',(req,res)=>{
    const id=req.params.id;
    UserModel.findById({_id:id})
    .then((result)=>{
        res.json(result)
    })
    .then((err)=>{
        console.log(err)
    })
})
app.put('/update/:id',(req,res)=>{
    const id=req.params.id;
    const name=req.body.name;
    const email=req.body.email;
    const age=req.body.age;
    UserModel.findByIdAndUpdate({_id:id},{name:name,email:email,age:age})
    .then((result)=>{
        res.json(result)
    })
    .catch((err)=>{
        res.json(err)
    })
})

app.delete('/delete/:id',(req,res)=>{
    const id=req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then((result)=>{
        res.json(result)
    })
    .catch((err)=>{
        res.json(err)
    })
})
app.listen(port,()=>{
    console.log(`app is litioning in ${port}`)
})

