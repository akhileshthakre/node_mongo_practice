const express = require('express')
const User = require('../../model/user/users')
const getUsers = express.Router();

getUsers.get('/',(req, res) => {
    User.find().then((user) => {
        res.json(user).status(200)
    })
})

module.exports = getUsers;