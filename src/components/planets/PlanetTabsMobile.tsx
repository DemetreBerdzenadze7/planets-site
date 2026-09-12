import { tabs } from "./planetType";

const PlanetTabsMobile = () => {
  return (
    <div className="md:hidden">
      <div className="flex items-center justify-between px-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            className="text-[12px] font-bold leading-[2.75] tracking-[2px] opacity-[0.5] text-white uppercase"
          >
            {tab}
          </button>
        ))}
      </div>
      <hr className="border-white opacity-[0.2] mt-1.5 -mx-6" />
    </div>
  );
};

export default PlanetTabsMobile;
