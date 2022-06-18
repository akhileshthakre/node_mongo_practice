const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const User = require('./model/user/users')

const router = express.Router();
const app = express()

const uri = "mongodb+srv://akhilesh:akhilesh@rest.sa0z1.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(uri, () => {
    console.log("Connected")
},
    e => console.error(e)
)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/routes",router);

router.get('/',(req, res) => {
    User.find().then((user) => {
        res.send(user)
    })
})

router.post('/user',(req,res) => {
    try{
        User.create(req.body)
        res.sendStatus(200)
    }catch {
        (e => console.error(e.error)) 
    }

})

app.listen(3000,() => {
    console.log("App running on port 3000")
})
