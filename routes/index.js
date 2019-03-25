const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.send('Hello from Routes Folder!')
})

router.get('/index', (req, res, next) => {
    res.render('index', null)

})

router.get('/json', (req, res, next) => {
    res.json({
        greeting: 'Hello!!'
    })
})

module.exports = router