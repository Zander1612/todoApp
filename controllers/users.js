const usersRouter = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const { PAGE_URL } = require('../config');

// Post User
usersRouter.post('/', async (req, res) => {
    const { name, email, password } = req.body;
    console.log('str',req.body);
    

    if (!name || !email || !password) {
        return res.status(400).json({ error: 'Todos lo espacion son requeridos' });
    }

    const userExist = await User.findOne({ email });
    console.log('userExist', userExist);
    if (userExist) {
        return res.status(400).json({ error: 'El correo ya está en uso' });
    }

     // const saltRounds = 10;

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = new User({
        name,
        email,
        passwordHash,
    });

    const saveUser= await newUser.save();
    console.log('save', saveUser);
    
    const token = jwt.sign({id: saveUser.id}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '3h'});
    console.log('token', token);
    

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        requireTLS: false,
        auth: {
            user: process.env.EMAIL_USER, // generated ethereal user
            pass: process.env.EMAIL_PASS, // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false // WARNING: Disables certificate validation
        },
    });
    

    (async () => {
        try {
        const info = await transporter.sendMail({
        from: process.env.EMAIL_USER, // sender address
        to: saveUser.email, // list of receivers
        subject: "Verificacion de Usuario", // Subject line
        html: `<a href="${ PAGE_URL }/verify/${saveUser.id}/${token}"> Verificar Correo</a>`, // html body
        });

        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    } catch (err) {
        console.error("Error while sending mail", err);
    }
    })();

    return res.status(201).json('Usuario creado correctamente, por favor verifica tu cuenta');

});


module.exports = usersRouter;