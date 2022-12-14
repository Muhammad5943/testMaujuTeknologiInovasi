const env  = process.env.NODE_ENV || 'development'
const path = require('path');

require('dotenv').config({
    path: path.resolve(__dirname, `${env}.env`)
});

const config = require('./config/app')[env]
const express = require('express')
const passport = require('passport')
const initPassport = require('./config/passport')
const rootRouter = require('./routes/index')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
// Passport.js
app.use(passport.initialize())
initPassport(passport)

app.use('/api', rootRouter)

app.listen(config.port, () => {
    console.log('Server started at port '+config.port)
})