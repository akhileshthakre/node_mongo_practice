const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const getUsers = require('./routes/users/getUsers')
const createUser = require('./routes/users/createUser')
const stripeRoutes = require('./routes/payments/stripe')
const getMoveis = require('./routes/users/getJsonList')


const app = express()

const router = express.Router()

const uri = "mongodb+srv://akhilesh:akhilesh@rest.sa0z1.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(uri, () => {
    console.log("Connected")
},
    e => console.error(e)
)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use("/api", getUsers);
app.use("/api", createUser);
app.use("/api/payment", stripeRoutes);
app.use("/api", getMoveis)

const PORT = process.env.PORT || 1337
app.listen(PORT,() => {
    console.log("App running on port 3000")
})
