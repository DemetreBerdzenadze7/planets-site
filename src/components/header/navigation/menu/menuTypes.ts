interface Planets {
  planetName: string;
  color: string;
}

type PlanetName = Planets[];

export const planetsNames: PlanetName = [
  { planetName: "Mercury", color: "bg-mercury" },
  { planetName: "Venus", color: "bg-venus" },
  { planetName: "Earth", color: "bg-earth" },
  { planetName: "Mars", color: "bg-mars" },
  { planetName: "Jupiter", color: "bg-jupiter" },
  { planetName: "Saturn", color: "bg-saturn" },
  { planetName: "Uranus", color: "bg-uranus" },
  { planetName: "Neptune", color: "bg-neptune" },
];
