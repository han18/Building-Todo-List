import "./App.css";
import { initialState } from "./Data/data-list.js";
import TodoList from "./Components /TodoList.js";
import { TodoReducer } from "./Reducer/TodoReducer";
import { useReducer } from "react";

function App() {
  const [todos, dispatch] = useReducer(TodoReducer, initialState);

  return (
    <div className="App">
      <h1>Todo App</h1>

      <TodoList todos={todos} dispatch={dispatch} />
    </div>
  );
}

export default App;
