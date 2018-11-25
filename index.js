const express = require('express')
const fs = require('fs')

const port = process.env.PORT || 3400
const app = express()

app.use((req, res, next) => {
    const now = new Date().toString()
    const log = `${now}: ${req.method} = ${req.url}, \n`
    fs.appendFile('server.log', log, (error) => {
        if (error) {
            console.log('Unable to add log!')
        }
    })
    next()
})

app.get('/', (req, res) => {
    res.send('<h1>Hello Baba!</h>')
})

app.get('/about', (req, res) => {
    res.send('<h1>You are nothing!</h2>')
})

app.listen(port)