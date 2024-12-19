import SearchForm from "../Sidebar/components/SearchForm/SearchForm";
import CityDescription from "../Sidebar/components/CityDescription/CityDescription";
import Temperature from "../Sidebar/components/Temperature/Temperature";
import WeatherDetails from "../Sidebar/components/WeatherDetails/WeatherDetails";

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
