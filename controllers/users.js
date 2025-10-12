const usersRouter = require('express').Router();

// Post User
usersRouter.post('/', async (req, res) => {
    const { name, email, password } = req.body;
    console.log(name, email, password);
    
});




module.exports = usersRouter;