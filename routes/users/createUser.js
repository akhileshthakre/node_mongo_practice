const express = require('express')
const User = require('../../model/user/users')
const createUsers = express.Router();

createUsers.post('/user',(req,res) => {
    try{
        User.create(req.body)
        res.sendStatus(200)
    }catch {
        (e => console.error(e.error)) 
    }

})

module.exports = createUsers;