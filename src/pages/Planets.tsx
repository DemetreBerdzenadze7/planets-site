import PlanetTabs from "../components/planets/PlanetTabs";
import { useParams } from "react-router";
import data from "../data/data.json";

const Planets = () => {
  const { planetName } = useParams();

  const planet = data.find((planet) => planet.name === planetName);

  if (!planet) {
    return null;
  }

  return (
    <div>
      <PlanetTabs />
    </div>
  );
};

export default Planets;
