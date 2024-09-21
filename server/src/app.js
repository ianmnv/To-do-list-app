const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

const todosRouter = require("./router/todos.router");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(morgan("common"));

app.use(express.json());

app.use("/todos", todosRouter);

module.exports = app;
