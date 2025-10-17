const usersRouter = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const { PAGE_URL } = require('../config');

// Post User
usersRouter.post('/', async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: 'Todos lo espacion son requeridos' });
    }

    const userExist = await User.findOne({ email });

    if (userExist) {
        return res.status(400).json({ error: 'El correo ya está en uso' });
    }

    const saltRounds = 10;

    const passwordHash = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
        name,
        email,
        passwordHash,
    });

    const saveUser= await newUser.save();
    
    const token = jwt.sign({id: saveUser.id}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '3h'});

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL_USER, // generated ethereal user
            pass: process.env.EMAIL_PASS, // generated ethereal password
        },
    });

    await transporter.sendMail({
        from: process.env.EMAIL_USER, // sender address
        to: saveUser.email, // list of receivers
        subject: "Verifica tu cuenta", // Subject line
        html: `<a href="${PAGE_URL}/verify/${token}">Verificar Correo</a>`,
    });

    return res.status(201).json('Usuario creado correctamente, por favor verifica tu cuenta');

});




module.exports = usersRouter;