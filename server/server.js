const express = require("express");
const app = express();

///////////////////////////////////////////////////////////////////
// // To-do list server

const toDos = [
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

app.get("/api", (req, res) => {
  res.status(200).json(toDos);
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});

// investigate http methods
// get: r (read, obtener info), post: c (create, new info), put: u (update, reemplazar),
// delete: d (delete), patch: u (update, change specific property)

// What is, how to use, when to use
// Headers, body, path params, query params

// const toDoList = ["Lavar trastes"];

// app.get("/", (req, res) => {
//   res.send(toDoList);
// });

// app.post("/", (req, res) => {
//   console.log(JSON.parse(req.body));
//   //   const newTodo = req.body.todo;
//   //   toDoList.push(newTodo);
//   //   res.send(`Todo ${newTodo} added`);
// });

// app.put("/", (req, res) => {
//   const { todo, newTodo } = req.body;
//   const todoIndex = toDoList.findIndex((el) => el === todo);
//   todoIndex
//     ? (toDoList[todoIndex] = newTodo)
//     : res.send(`Todo ${todo} not found.`);

//   res.send(`Todo ${newTodo} replaced`);
// });

// app.delete("/", (req, res) => {
//   const todo = req.body.todo;
//   const todoIndex = toDoList.findIndex((el) => el === todo);
//   todoIndex ? toDoList[todoIndex].delete() : res.send(`Todo not found ${todo}`);
//   res.send("Todo deleted");
// });

// app.patch("/", (req, res) => {
//   const { todo, newTodo } = req.body;
//   const todoIndex = toDoList.findIndex((el) => el === todo);
//   todoIndex
//     ? (toDoList[todoIndex] = newTodo)
//     : res.send(`Todo ${todo} not found.`);

//   res.send(`Todo ${newTodo} updated`);
// });
