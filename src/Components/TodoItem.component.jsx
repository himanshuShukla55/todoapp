import { useContext } from "react";
import { TodoContext } from "../Context/TodoContextProvider";
import { useNavigate } from "react-router-dom";

const TodoItem = ({
  item: { id, title, status, label },
  handleDelete,
  handleStatusChange,
}) => {
  const { handleTodoEdit, setIdToEdit } = useContext(TodoContext);
  const navigate = useNavigate();
  const handleEdit = () => {
    handleTodoEdit(title, label);
    setIdToEdit(id);
    navigate("/edit");
  };
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-status">{status ? "Completed" : "Pending"}</p>
      <label>
        Mark as {status ? "Pending" : "Completed"}
        <input
          type="checkbox"
          name="status"
          checked={status}
          onChange={({ target: { checked } }) =>
            handleStatusChange(id, checked)
          }
        />
      </label>
      {label && <h3 className="card-label">{label}</h3>}
      <button className="edit-card-btn" onClick={handleEdit}>
        Edit
      </button>
      <button className="delete-card-btn" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
