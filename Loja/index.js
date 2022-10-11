//Express file
const express = require('express')
const morgan = require('morgan')
const path = require('path')
const route = require('./src/routes/task_routes.js')
const app = express()
const { mongoose } = require('./src/database.js')

// Settings
app.set('port', process.env.PORT || 3000)
//Middlewares: function that are executed before arrive to routes
app.use(morgan('dev'))
//Sempre que chegue um ficheiro isto verifica que seja um ficheiro json
app.use(express.json())
//Routes
app.use('/', route)
//Static files
app.use(express.static(path.join(__dirname, 'public')))
//Starting the Server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})