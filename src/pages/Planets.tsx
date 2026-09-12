import PlanetTabsMobile from "../components/planets/PlanetTabsMobile";
import { useParams } from "react-router";
import data from "../data/data.json";
import Container from "../container/Container";
import PlanetHero from "../components/planets/PlanetHero";
import PlanetDescription from "../components/planets/PlanetDescription";

const Planets = () => {
  const { planetName } = useParams();

  const planet = data.find((planet) => planet.name === planetName);

  if (!planet) {
    return null;
  }

  return (
    <Container className="md:px-10">
      <PlanetTabsMobile />
      <PlanetHero planet={planet} />
      <PlanetDescription planet={planet} />
    </Container>
  );
};

export default Planets;
