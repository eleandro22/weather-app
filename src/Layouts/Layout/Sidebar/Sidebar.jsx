import SearchForm from "../Sidebar/components/SearchForm/SearchForm";
import CityDescription from "../Sidebar/components/CityDescription/CityDescription";
import Temperature from "../Sidebar/components/Temperature/Temperature";
import WeatherDetails from "../Sidebar/components/WeatherDetails/WeatherDetails";
import TiranaData from "../../../utils/TiranaData.json";
import { useState, useEffect } from "react";

const Sidebar = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    setWeatherData(TiranaData);
  }, []);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="sidebar">
      <SearchForm />
      <Temperature temperature={weatherData.temperature} />
      <WeatherDetails
        maxTemp={weatherData.maxTemp}
        minTemp={weatherData.minTemp}
        humidity={weatherData.humidity}
        windSpeed={weatherData.windSpeed}
        rainPercentage={weatherData.rainPercentage}
      />
      <CityDescription />
    </div>
  );
};

export default Sidebar;
