const config = require('./utils/config')
import express = require("express");
const mongoose = require('mongoose')
const cors = require("cors");
const app = express();
const usersRouter = require('./controllers/users')
app.use(cors());
app.use(express.json());
app.use('/api/users', usersRouter)
//connect to database
const url = config.MONGODB_URI;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('connected to MongoDB')
    })
    .catch((error: any) => {
        console.log('error connecting to MongoDB:', error.message)
    })



module.exports = app