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
  const clearTodo = () => {
    setTodo({ title: "", label: "", status: false });
  };
  return (
    <TodoContext.Provider
      value={{
        todo,
        idToEdit,
        setIdToEdit,
        handleChange,
        handleTodoEdit,
        clearTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
