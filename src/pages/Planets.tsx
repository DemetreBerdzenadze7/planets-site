import PlanetTabsMobile from "../components/planets/PlanetTabsMobile";
import { useParams } from "react-router";
import data from "../data/data.json";
import Container from "../container/Container";
import PlanetHero from "../components/planets/PlanetHero";

const Planets = () => {
  const { planetName } = useParams();

  const planet = data.find((planet) => planet.name === planetName);

  if (!planet) {
    return null;
  }

  return (
    <Container>
      <PlanetTabsMobile />
      <PlanetHero planet={planet} />
    </Container>
  );
};

export default Planets;
