const express = require("express");

const { getAllTodos, postNewTodo } = require("./todos.controller");

const todosRouter = express.Router();

todosRouter.get("/", getAllTodos);
todosRouter.post("/", postNewTodo);

module.exports = todosRouter;
