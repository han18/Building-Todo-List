import "./App.css";
import { initialState } from "./Data/data-list.js";
import { todoReducer } from "./reducer/todoReducer";
import { useReducer, useState } from "react";

function App() {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  const [newTodo, setNewTodo] = useState("");
  const [editTodo, setEditTodo] = useState({ id: null, title: "" });

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      dispatch({ type: "ADD_TODO", payload: newTodo });
      setNewTodo("");
    }
    const handleToggleTodo = (id) => {
      dispatch({ type: "TOGGLE_TODO", payload: id });
    };

    const handleDeleteTodo = (id) => {
      dispatch({ type: "DELETE_TODO", payload: id });
    };
    const handleEditTodo = (id, title) => {
      setEditTodo({ id, title });
    };

    const handleSaveTodo = () => {
      dispatch({
        type: "EDIT_TODO",
        payload: { id: editTodo.id, title: editTodo.title },
      });
      setEditTodo({ id: null, title: "" });
    };
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add new todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
}
export default App;
