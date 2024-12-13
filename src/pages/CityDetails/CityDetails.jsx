import { useParams } from "react-router-dom";

const CityDetails = () => {
  const { cityId } = useParams();
  return <h2>Details for {cityId}</h2>;
};

export default CityDetails;
