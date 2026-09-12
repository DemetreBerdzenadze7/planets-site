import type { Planet } from "./planetType";
import { stats } from "./planetType";

const PlanetDescription = ({ planet }: { planet: Planet }) => {
  return (
    <div className="flex flex-col gap-2 mt-7 md:grid md:grid-cols-4 md:gap-2.75 lg:mt-15 ">
      {stats.map((stat) => (
        <div
          key={stat.key}
          className="flex items-center justify-between  text-white border border-white/25 py-2.75 px-6 md:block md:py-4.25 md:px-4 lg:p-4  "
        >
          <p className="opacity-[0.5] text-[11px] font-menu leading-loose tracking-[0.75px] uppercase font-bold">
            {stat.label}
          </p>
          <p className="text-[20px] leading-[1.3] tracking-[-0.75px] md:text-[24px] lg:text-[40px]  ">
            {planet[stat.key]}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PlanetDescription;
