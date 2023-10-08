import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TodoContext } from "../../Context/TodoContextProvider";
import Form from "../../Components/Form.component";

const AddTodo = () => {
  const navigate = useNavigate();
  const { todo, handleChange, clearTodo } = useContext(TodoContext);
  const { title, label } = todo;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await fetch("https://todo-xbkz.onrender.com/todos", {
        method: "POST",
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
      titlePlaceholder="Add New Todo"
      labelPlaceholder="Add Label"
      titleValue={title}
      labelValue={label}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      submitValue="Submit"
    />
  );
};

export default AddTodo;
