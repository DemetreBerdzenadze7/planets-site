import PlanetTabs from "../components/planets/PlanetTabs";
import { useParams } from "react-router";
import data from "../data/data.json";
import Container from "../container/Container";

const Planets = () => {
  const { planetName } = useParams();

  const planet = data.find((planet) => planet.name === planetName);

  if (!planet) {
    return null;
  }

  return (
    <Container>
      <PlanetTabs />
    </Container>
  );
};

export default Planets;
