const SearchForm = () => {
  return (
    <div className="search-form-input">
      <img
        src="../src/assets/icons/temperature-high.svg"
        alt="temperature-icon"
        width="20"
      />
      <input type="text" placeholder="Type city name"></input>
      <img
        className="search-icon"
        src="../src/assets/icons/search.svg"
        alt="search-icon"
        width="20"
      />
    </div>
  );
};

export default SearchForm;
