//Connect to database
const mongoose = require('mongoose')
const URI = 'mongodb+srv://PauloBarros:elcreador123r3PA@cluster0.prjtsu2.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(URI, {
            useNewUrlParser: true,
            //useCreateIndex: true,
            useUnifiedTopology: true
        })
        .then( () => {
            console.log('Connected to the database ')
        })
        .catch( (err) => {
            console.error(`Error connecting to the database. n${err}`);
        })

module.exports = mongoose

