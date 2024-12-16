import SearchForm from "../Sidebar/SearchForm/SearchForm";
import CityDescription from ".//CityDescription/CityDescription";
import WeatherDetails from "./WeatherDetails/WeatherDetails";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SearchForm />
      <WeatherDetails />
      <CityDescription />
    </div>
  );
};

export default Sidebar;
