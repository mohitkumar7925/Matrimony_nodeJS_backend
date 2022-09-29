import express from 'express'
import {connect} from './config/db'

var app = express();
app.use(express.json())


connect()

var UserRoute = require('./router/UserRoute')

app.use('/user', UserRoute)




app.listen(3000, () => {
    console.log('Server is listening on port 3000');
})

module.exports = express;

