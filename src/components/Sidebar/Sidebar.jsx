import { Link } from "react-router-dom";
import SearchForm from "../Sidebar/SearchForm/SearchForm";
import CityDescription from ".//CityDescription/CityDescription";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SearchForm />
      <CityDescription />
    </div>
  );
};

export default Sidebar;
