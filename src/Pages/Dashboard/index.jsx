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
  return (
    <div id="todo-list">
      {todoList.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Dashboard;
