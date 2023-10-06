import { Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import AddTodo from "../Pages/AddToDo";
import EditTodo from "../Pages/EditToDo";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AddTodo />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/edit" element={<EditTodo />} />
    </Routes>
  );
};

export default AllRoutes;
