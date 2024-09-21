const todos = [
  {
    id: 0,
    toDo: "Clean room",
    completed: false,
  },
  {
    id: 1,
    toDo: "Walk the dog",
    completed: false,
  },
];

function addNewTodo(data) {
  todos.push(data);
}

module.exports = { todos, addNewTodo };
