//Importanciones
const todosRouter = require("express").Router();
const User = require('../models/user');
const Todo = require('../models/todo');


//Obtener todas las tareas del usuario (GET /api/todos)
todosRouter.get('/', async (request, response) => {
    // Obtener el usuario autenticado
    const user = request.user;
    // Buscar todas las tareas asociadas al usuario en la base de datos
    const todos = await Todo.find({ user: user.id });
    return response.status(200).json(todos);
});


//Crear una nueva tarea (POST /api/todos
todosRouter.post('/', async (request, response) => {
    const user = request.user;
    // Crear una nueva tarea con el texto proporcionado y el ID del usuario autenticado
    const { text } = request.body;
    // Crear y guardar la nueva tarea en la base de datos
    const newTodo = new Todo ({
        text,
        checked: false,
        user: user._id
    })
    // Guardar la nueva tarea en la base de datos 
    const savedTodo = await newTodo.save();
    // Agregar la nueva tarea a la lista de tareas del usuario
    user.todos = user.todos.concat(savedTodo._id);
    // Guardar el usuario actualizado en la base de datos
    await user.save();

    return response.status(201).json(savedTodo);
});


//Eliminar una tarea (DELETE /api/todos/:id)
todosRouter.delete('/:id', async (request, response) => {
    const user = request.user;
    // Eliminar la tarea con el ID proporcionado de la base de datos
    await Todo.findByIdAndDelete(request.params.id)
    // Actualizar la lista de tareas del usuario para eliminar la tarea eliminada
    user.todos = user.todos.filter(todo => todo.id !== request.params.id);
    // Guardar el usuario actualizado en la base de datos
    await user.save();
    return response.sendStatus(204);
});


//Actualizar el estado de una tarea (PATCH /api/todos/:id)
todosRouter.patch('/:id', async (request, response) => {
    const user = request.user;
    // Actualizar el estado "checked" de la tarea con el ID proporcionado
    const { checked } = request.body;
    console.log(request.params.id);
    // Actualizar la tarea en la base de datos
    await Todo.findByIdAndUpdate(request.params.id, { checked });

    return response.sendStatus(200);
});



module.exports = todosRouter;