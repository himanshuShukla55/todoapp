import { useEffect, useState } from "react";

import TodoItem from "../../Components/TodoItem.component";

const Dashboard = () => {
  const [todoList, setTodoList] = useState([]);

  const getTodoList = async () => {
    try {
      const res = await fetch("https://todo-xbkz.onrender.com/todos");
      const data = await res.json();
      setTodoList(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getTodoList();
  }, []);
  const handleDelete = async (id) => {
    try {
      await fetch(`https://todo-xbkz.onrender.com/todos/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const newTodoList = todoList.filter((item) => item.id !== id);
      setTodoList(newTodoList);
    } catch (error) {
      console.error(error);
    }
  };
  const handleStatusChange = async (id, status) => {
    try {
      await fetch(`https://todo-xbkz.onrender.com/todos/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });
      getTodoList();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div id="todo-list">
      {todoList.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          handleDelete={handleDelete}
          handleStatusChange={handleStatusChange}
        />
      ))}
    </div>
  );
};

export default Dashboard;
