import Todo from "../models/Todo.js";

export const getTodos = async (req,res,next) => {

    const todos = await Todo.find();
    
    res.render('index', {todos});
}

export const addTodo = (req,res,next) => {
    Todo.create({
        name: req.body.name,
    })

    res.redirect('/');
}