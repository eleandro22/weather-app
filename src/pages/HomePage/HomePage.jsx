import TemperatureChart from "./Chart/TemperatureChart";
import Forecast from "./Forecast/Forecast";

const HomePage = () => {
  return (
    <div className="main-content">
      <div className="main-content-logo">
        <p className="content-logo">
          NATIONAL<br></br> WEATHER
        </p>
      </div>
      <div className="main-content-heading">
        <h2>
          Storm <br />
          with Heavy Rain
        </h2>
      </div>
      <div className="main-content-graph">
        <TemperatureChart />
      </div>
      <div className="main-content-forecast">
        <h2>5 Day Forecast</h2>
        <Forecast />
      </div>
    </div>
  );
};

export default HomePage;
