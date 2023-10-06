import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TodoContext } from "../../Context/TodoContextProvider";
import Form from "../../Components/Form.component";

const AddTodo = () => {
  const navigate = useNavigate();
  const { todo, handleChange } = useContext(TodoContext);
  const { title, label } = todo;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await fetch("http://localhost:8080/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
      });
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
