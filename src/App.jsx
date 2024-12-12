import "./App.css";

const App = () => {
  return (
    <div className="main-container">
      <div className="sidebar">
        <input placeholder="search city"></input>
        <h2 className="temperature-big"> 20 °C</h2>
        <div className="details">
          <h3 className="percentage">9.8% </h3>
          <h3 className="wind-details"> Wind: WSW 6mph </h3>
        </div>
        <div className="description">
          <h2 className="city-title"> Oklahoma City</h2>
          <p>
            The air quality is generally acceptable for most individuals.
            However, sensitive groups may experience minor to moderate symptoms
            from long-term exposure.
          </p>
        </div>
      </div>
      <div className="content">
        <div className="content-heading">title</div>
        <div className="graph"> Graph here</div>
        <div className="forecast">Forecast here</div>
      </div>
    </div>
  );
};

export default App;
