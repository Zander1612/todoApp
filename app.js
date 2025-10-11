const express = require('express');
const app = express();
const path = require('path');

require('dotenv').config();
const mongoose = require('mongoose');

//Rutas Frontend
app.use('/', express.static(path.resolve('views', 'home')));
app.use('/styles', express.static(path.resolve('views', 'styles')));
app.use('/login', express.static(path.resolve('views', 'login')));
app.use('/signup', express.static(path.resolve('views', 'signup')));
app.use('/components', express.static(path.resolve('views', 'components')));
app.use('/images', express.static(path.resolve('views', 'images')));


(async() => {
try {
    await mongoose.connect(process.env.MONGO_URI_TEST);
    console.log('Conectado a Mongo DB');
    
} catch (error) {
    console.log(error);
    
}
})()

module.exports = app;
