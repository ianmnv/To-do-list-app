import "./App.css";

import ToDos from "./components/To-dos";

function App() {
  return (
    <main>
      <header className="align">
        <h1>To-do list mini app</h1>
      </header>

      <div className="main-container align">
        <form action="submit" id="save-new-todo">
          <input type="text" name="input-to-do" id="input-to-do" />
          <button id="btn-save">Save</button>
        </form>

        <ToDos />
      </div>
    </main>
  );
}

export default App;
