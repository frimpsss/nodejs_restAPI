const express = require("express")
const { connect } = require("mongoose")
const app = express()
const postRoute = require('./routes/posts')
require('dotenv/config')
const bodyParser = require("body-parser")

app.use(bodyParser.json())

app.use('/posts', postRoute)
app.get('/', (req, res) => {
    res.send("Welcome to Home")

})





//setting port  
app.listen(8080)



//connect to db
connect(process.env.DB_CONNECTION, () => {
    console.log('connected to db')
})
// mongodb+srv://testuser:<password>@cluster0.ovagykh.mongodb.net/?retryWrites=true&w=majority