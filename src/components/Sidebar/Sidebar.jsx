import { Link } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SearchForm />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/city/">City</Link>
          </li>
          {/* Add more cities or pages here */}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
