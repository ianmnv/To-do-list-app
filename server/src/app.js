const express = require("express");
const cors = require("cors");
const app = express();

const todosRouter = require("./router/todos.router");

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use("/todos", todosRouter);

module.exports = app;
