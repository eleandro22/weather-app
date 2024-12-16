import SearchForm from "../Sidebar/SearchForm/SearchForm";
import CityDescription from ".//CityDescription/CityDescription";
import Temperature from "./Temperature/Temperature";
import WeatherDetails from "./WeatherDetails/WeatherDetails";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SearchForm />
      <Temperature />
      <WeatherDetails />
      <CityDescription />
    </div>
  );
};

export default Sidebar;
