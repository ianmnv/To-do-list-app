import React, { useEffect, useState } from "react";

function ToDos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function getToDos() {
      const response = await fetch("http://localhost:9000/todos");
      const todos = await response.json();
      setTodos(todos);
    }
    getToDos();
  }, []);

  return (
    <div className="container-list">
      {todos.map((item, i) => {
        return (
          <div className="to-do-item" key={i}>
            <input
              type="checkbox"
              name="input-checkbox"
              className="checkbox-inp"
            />
            <input
              className="to-do-txt"
              value={item.toDo}
              type="text"
              name="to-do"
            />

            <div>
              <button className="edit-btn">Edit</button>
              <button className="delete-btn">Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ToDos;
