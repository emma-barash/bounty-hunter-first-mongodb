const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000

// MIDDLEWARE
app.use(express.json());
app.use(morgan('dev'));

// MONGO DB CONNECT
mongoose.connect('mongodb://localhost:27017/bounty-characters', { useNewUrlParser: true }, () => {
    console.log('Connected to the DB')
})

// ROUTES
app.use('/bounty', require('./routes/bountyRouter.js'))

// GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

// LISTEN
app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`)
})

