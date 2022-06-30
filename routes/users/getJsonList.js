const express = require('express')
const app = express()
const getMoveis = express.Router()

getMoveis.get('/movies',(req,res) => {
    const movies = fetch("https://jsonplaceholder.typicode.com/todos/1")
    movies.then(response => response.json())
    .then(res => res.send({
        res
    }))
})

module.exports = getMoveis;

