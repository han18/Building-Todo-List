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
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleTodo(todo.id)}
              />
              {editTodo.id === todo.id ? (
                <>
                  <input
                    type="text"
                    value={editTodo.title}
                    onChange={(e) =>
                      setEditTodo({ ...editTodo, title: e.target.value })
                    }
                  />
                  <button onClick={handleSaveTodo}>Save</button>
                </>
              ) : (
                <>
                  <span>{todo.title}</span>
                  <button
                    onClick={() => handleEditTodo(todo.id, todo.title)}
                    disabled={todo.completed}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteTodo(todo.id)}
                    disabled={!todo.completed}
                  >
                    Delete
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  };
}
export default App;
