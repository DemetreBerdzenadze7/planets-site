import { usePlanet } from "../../context/Context";
import PlanetTabs from "./PlanetTabs";
import type { Planet } from "./planetType";

const PlanetHero = ({ planet }: { planet: Planet }) => {
  const { activeTab } = usePlanet();
  return (
    <div className="flex flex-col items-center mt-15.75 lg:flex-row lg:justify-center">
      <img
        src={planet.images.planet}
        alt={planet.name}
        className="lg:w-[40%] md:mb-20"
      />

      <div className="md:flex md:gap-17.25 md:items-center lg:flex-col lg:w-[55%] lg:gap-10">
        <div className="mt-16.75 md:mt-0 md:w-[50%]">
          <h1 className="text-[40px] text-center uppercase leading-[1.3] tracking-[-1.5px] text-white mb-4 md:text-left md:mb-6 md:text-[48px] lg:text-[80px]">
            {planet.name}
          </h1>
          <p className="text-[11px] leading-loose font-menu text-white text-center md:text-left lg:text-[15px]">
            {activeTab === "overview"
              ? planet.overview.content
              : activeTab === "structure"
                ? planet.structure
                : planet.geology}
          </p>

          <div className="flex justify-center mt-2.5 md:justify-start md:mt-8 lg:mt-3">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={planet.overview.source}
              className="text-[12px] leading-[2.08] text-white opacity-[0.5] flex items-center gap-1 lg:text-[15px]"
            >
              Source:{" "}
              <span className="font-bold underline decoration-1">
                Wikipedia
              </span>{" "}
              <img src="/images/icon-source.svg" alt="Source" />
            </a>
          </div>
        </div>

        <div className="hidden md:block md:w-[50%]">
          <PlanetTabs />
        </div>
      </div>
    </div>
  );
};

export default PlanetHero;
