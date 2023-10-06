import { Link } from "react-router-dom";
import "./App.css";
import AllRoutes from "./Routes";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Add Todo</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>
      <AllRoutes />
    </>
  );
}

export default App;
