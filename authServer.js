require('dotenv').config()

const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')

app.use(express.json())

app.post('/login', (req, res) => {
    // Authenticate User

    const username = req.body.username
    const user = { name: username }

    const acessToken = jwt.sign(user, process.env.ACESS_TOKEN_SECRET)
    res.json({ acessToken: acessToken })

})

function generateAcessToken(user) {
    return jwt.sign(user, process.env.ACESS_TOKEN_SECRET)
}  

app.listen(4000)