import { useEffect, useState } from "react";

import { useImmer } from "use-immer";

import "./App.css";
import ToDos from "./components/To-dos";

import FullContext from "./FullContext";

function App() {
  const API_URL = "http://localhost:9000";
  const [todoData, setTodoData] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const [state, dispatch] = useImmer({
    id: 0,
    toDo: "",
    completed: false,
  });

  async function httpGetToDos() {
    const response = await fetch(`${API_URL}/todos`);
    const todos = await response.json();
    setTodoData(todos);
  }

  useEffect(() => {
    if (submitted) {
      httpGetToDos();
      setSubmitted(false);
    }
  }, [submitted]);

  useEffect(() => {
    httpGetToDos();
    setSubmitted(false);
  }, []);

  async function submitCallback(e) {
    e.preventDefault();

    if (!state.toDo) {
      return alert("Please fill the to-do input");
    }

    try {
      setSubmitted(true);
      return await fetch(`${API_URL}/todos`, {
        method: "post",
        body: JSON.stringify(state),
        headers: {
          "Content-type": "application/json",
        },
      });
    } catch (error) {
      console.error(error);
      return { error: error };
    }
  }

  return (
    <FullContext.Provider value={{ httpGetToDos, todoData }}>
      <main>
        <header className="align">
          <h1>To-do list mini app</h1>
        </header>

        <div className="main-container align">
          <form action="submit" id="save-new-todo" onSubmit={submitCallback}>
            <input
              type="text"
              name="input-to-do"
              id="input-to-do"
              onChange={(e) => {
                dispatch((draft) => {
                  draft.toDo = e.target.value;
                  draft.id = todoData.length;
                });
              }}
            />
            <button id="btn-save">Save</button>
          </form>

          <ToDos />
        </div>
      </main>
    </FullContext.Provider>
  );
}

export default App;
