require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const cookiesParser = require('cookie-parser');
const morgan = require('morgan');
const usersRouter = require('./controllers/users');
const loginRouter = require('./controllers/login.js');

(async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI_TEST);
        console.log('Conectado a Mongo DB');
    
    } catch (error) {
        console.log(error);
    
    }
})()

app.use(cors());
app.use(express.json());
app.use(cookiesParser());

//Rutas Frontend
app.use('/', express.static(path.resolve('views', 'home')));
app.use('/styles', express.static(path.resolve('views', 'styles')));
app.use('/login', express.static(path.resolve('views', 'login')));
app.use('/signup', express.static(path.resolve('views', 'signup')));
app.use('/components', express.static(path.resolve('views', 'components')));
app.use('/img', express.static(path.resolve('views', 'img')));
app.use('/verify/:id/:token', express.static(path.resolve('views', 'verify')));

app.use(morgan('tiny'));

//Rutas Backend
app.use('/api/users', usersRouter);
app.use('/api/login', loginRouter);

module.exports = app;