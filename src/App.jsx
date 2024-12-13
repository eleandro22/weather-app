import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import CityDetails from "./pages/CityDetails/CityDetails";
import "../src/styles/styles.scss";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/city/" element={<CityDetails />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
