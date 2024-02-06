export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        { id: Date.now(), title: action.payload, completed: false },
        ...state,
      ];
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case "DELETE":
      return state.filter((todo) => todo.id !== action.payload);
    case "EDIT":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, title: action.payload.title }
          : todo
      );
    default:
      return state;
  }
};
