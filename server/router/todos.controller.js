const todos = require("../models/todos.model");

function getAllTodos(req, res) {
  return res.status(200).json(todos);
}

module.exports = {
  getAllTodos,
};
