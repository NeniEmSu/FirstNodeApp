const express = require('express')

const app = express()

app.get('/', (req, res, next) => {
    res.send('Hello There!!')
})

app.listen(3000)