const Temperature = ({ temperature }) => {
  return (
    <div className="temperature-container">
      <h3>{temperature}°C</h3>
      <div className="rough-details">
        <p className="rain-percentage">9.8%</p>
        <p className="wind-description">Wind at 6kmph</p>
      </div>
    </div>
  );
};

export default Temperature;
