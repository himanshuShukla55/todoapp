import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { TodoContext } from "../../Context/TodoContextProvider";
import Form from "../../Components/Form.component";

const EditTodo = () => {
  const navigate = useNavigate();
  const { todo, handleChange, idToEdit, clearTodo } = useContext(TodoContext);
  const { title, label } = todo;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await fetch(`https://todo-xbkz.onrender.com/todos/${idToEdit}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
      });
      clearTodo();
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Form
      titlePlaceholder="Edit Todo Title"
      labelPlaceholder="Edit Label"
      titleValue={title}
      labelValue={label}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      submitValue="Edit"
    />
  );
};

export default EditTodo;
