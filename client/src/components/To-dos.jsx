import React, { useEffect } from "react";
import axios from "axios";

function ToDos() {
  useEffect(() => {
    async function getToDos() {
      // const todos = await fetch("http://localhost:8000/friends", {
      //   method: "GET",
      // });
      // console.log(todos);
    }
    getToDos();
  }, []);

  return (
    <div className="container-list">
      <div className="to-do-item">
        <input type="checkbox" name="input-checkbox" className="checkbox-inp" />
        <input
          className="to-do-txt"
          value="Finish homework"
          type="text"
          name="to-do"
        />

        <div>
          <button className="edit-btn">Edit</button>
          <button className="delete-btn">Delete</button>
        </div>
      </div>

      <div className="to-do-item">
        <input type="checkbox" name="input-checkbox" className="checkbox-inp" />
        <input
          className="to-do-txt"
          value="Walk goyo"
          type="text"
          name="to-do"
        />

        <div>
          <button className="edit-btn">Edit</button>
          <button className="delete-btn">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default ToDos;
