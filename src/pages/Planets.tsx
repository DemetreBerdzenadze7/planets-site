import PlanetTabs from "../components/planets/PlanetTabs";
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
      <div className="md:hidden">
        <PlanetTabs />
      </div>
      <PlanetHero planet={planet} />
      <PlanetDescription planet={planet} />
    </Container>
  );
};

export default Planets;
