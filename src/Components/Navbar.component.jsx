import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <Link to="/">Add Todo</Link>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  );
};

export default Navbar;
