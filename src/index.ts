import express from 'express'
import {connect} from './config/db'
import UserRoute from './router/UserRoute'

var app = express();
app.use(express.json())

connect()

app.use(express.static('./public'))

app.use('/user', UserRoute)




app.listen(3000, () => {
    console.log('Server is listening on port 3000');
})

module.exports = express;

