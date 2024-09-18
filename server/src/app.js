const express = require("express");
const app = express();

const todosRouter = require("../router/todos.router");

app.use(express.json());

app.use("/todos", todosRouter);

module.exports = app;
