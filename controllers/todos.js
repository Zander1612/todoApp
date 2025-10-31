const todosRouter = require('express').Router();
const User = require('../models/user');
const Todo = require('../models/todo')

todosRouter.get('/', async  (req, res) => {
    const user = req.user;
    const todos = await Todo.find({ user: user.id });
    return res.status(200).json(todos);
});

todosRouter.post('/', async  (req, res) => {
    const user = req.user;
    const {text } = req.body;
    return res.status(200).json(todos);
});



module.exports = todosRouter;
