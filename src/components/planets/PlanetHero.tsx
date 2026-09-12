import data from "../../data/data.json";

type Planet = (typeof data)[0];

const PlanetHero = ({ planet }: { planet: Planet }) => {
  return (
    <div className="flex flex-col items-center mt-15.75 ">
      <img src={planet.images.planet} alt={planet.name} />

      <div className="mt-16.75 max-w-84.75 ">
        <h1 className="text-[40px] text-center leading-[1.3] tracking-[-1.5px] text-white mb-4 ">
          {planet.name}
        </h1>
        <p className="text-[11px] leading-loose font-menu text-white text-center  ">
          {planet.overview.content}
        </p>

        <div className="flex justify-center mt-2.5">
          <a
            href={planet.overview.source}
            className="text-[12px] leading-[2.08] text-white opacity-[0.5] flex items-center gap-1 "
          >
            Source:{" "}
            <span className="font-bold underline decoration-1 ">Wikipedia</span>{" "}
            <img src="/images/icon-source.svg" alt="Source" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PlanetHero;
