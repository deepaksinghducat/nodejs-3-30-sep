import express from "express";
import { addTodo, getTodos } from "../controllers/TodoController.js";

const Router = express.Router();

Router.get('/', getTodos);
Router.post('/', addTodo);

export default Router;