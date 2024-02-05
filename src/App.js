import "./App.css";
import { initialState } from "./Data/data-list";
import { useReducer } from "react";

function App() {
  const [todo, dispatch] = useReducer(initialState);

  return (
    <div className="App">
      <h1>This is a to do list app</h1>
    </div>
  );
}

export default App;
