const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000
// other imports
const path = require('path');


// MIDDLEWARE
app.use(express.json());
app.use(morgan('dev'));
// other middleware
app.use(express.static(path.join(__dirname, 'client', 'build')))

// MONGO DB CONNECT
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/bounty-characters', { useNewUrlParser: true }, () => {
    console.log('Connected to the DB')
})

// ROUTES
app.use('/bounty', require('./routes/bountyRouter.js'))

// GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

// added for Heroku
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
})

// LISTEN
app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`)
})

