import "./App.css";
import { initialState } from "./Data/data-list.js";
import TodoList from "./Components /TodoList.js";

import { useReducer } from "react";

function App() {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div className="App">
      <h1>Todo App</h1>

      <TodoList todo={todos} dispatch={dispatch} />
    </div>
  );
}

export default App;
