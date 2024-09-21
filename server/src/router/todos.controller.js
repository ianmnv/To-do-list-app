const { todos, addNewTodo } = require("../models/todos.model");

function getAllTodos(req, res) {
  return res.status(200).json(todos);
}

function postNewTodo(req, res) {
  const newData = req.body;
  addNewTodo(newData);
  return res.status(201).json(newData);
}

module.exports = {
  getAllTodos,
  postNewTodo,
};
