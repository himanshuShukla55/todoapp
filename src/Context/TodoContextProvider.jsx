import { createContext, useState } from "react";

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [todo, setTodo] = useState({ title: "", label: "", status: false });
  const [idToEdit, setIdToEdit] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setTodo({ ...todo, [name]: value });
  };
  const handleTodoEdit = (title, label) => {
    setTodo({ ...todo, title, label });
  };
  return (
    <TodoContext.Provider
      value={{ todo, idToEdit, setIdToEdit, handleChange, handleTodoEdit }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
