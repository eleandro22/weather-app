const WeatherDetails = () => {
  return (
    <div className="details-container">
      <div className="details-box">
        <span role="img" aria-label="temperature">
          🌡️
        </span>{" "}
        Max: 1.6°C
      </div>

      <div className="details-box">
        <span role="img" aria-label="temperature">
          🌡️
        </span>{" "}
        Min: 1.6°C
      </div>

      {/* */}
      <div className="details-box">
        <span role="img" aria-label="humidity">
          💧
        </span>{" "}
        Humidity: 97%
      </div>

      <div className="details-box">
        <span role="img" aria-label="wind">
          💨
        </span>{" "}
        Wind: 3.2 m/s
      </div>
    </div>
  );
};

export default WeatherDetails;
