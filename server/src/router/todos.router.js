const express = require("express");

const { getAllTodos } = require("./todos.controller");

const todosRouter = express.Router();

todosRouter.get("/", getAllTodos);

module.exports = todosRouter;
